import { NextResponse } from "next/server";
import { Resend } from "resend";
import { leadFormSchema, type LeadFormData } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Server-side validation
        const result = leadFormSchema.safeParse(body);

        if (!result.success) {
            const errors = result.error.issues.map((err) => ({
                field: err.path.join("."),
                message: err.message,
            }));

            console.error("[LEAD API] Validation failed:", errors);

            return NextResponse.json(
                { ok: false, error: "Validation failed", details: errors },
                { status: 400 }
            );
        }

        // Check honeypot field - if filled, it's likely spam
        if (result.data.company_website_hidden && result.data.company_website_hidden.length > 0) {
            console.warn("[LEAD API] Honeypot triggered - potential spam blocked");
            // Return success to not reveal spam detection
            return NextResponse.json({ ok: true });
        }

        // Prepare lead data
        const lead: LeadFormData = {
            clinic_name: result.data.clinic_name,
            contact_name: result.data.contact_name,
            email: result.data.email,
            phone: result.data.phone,
            website: result.data.website || "",
            current_booking_system: result.data.current_booking_system,
            message: result.data.message || "",
        };

        // Send email notification
        try {
            await resend.emails.send({
                from: "VetFlow Leads <onboarding@resend.dev>",
                to: "aiagentveterinary@gmail.com",
                subject: `🐾 New Lead: ${lead.clinic_name}`,
                html: `
                    <h2>New VetFlow Lead!</h2>
                    <p><strong>Clinic:</strong> ${lead.clinic_name}</p>
                    <p><strong>Contact:</strong> ${lead.contact_name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${lead.email}">${lead.email}</a></p>
                    <p><strong>Phone:</strong> <a href="tel:${lead.phone}">${lead.phone}</a></p>
                    <p><strong>Website:</strong> ${lead.website || "Not provided"}</p>
                    <p><strong>Current System:</strong> ${lead.current_booking_system}</p>
                    <p><strong>Message:</strong> ${lead.message || "No message"}</p>
                    <hr>
                    <p style="color: #666; font-size: 12px;">Sent from VetFlow Landing Page</p>
                `,
            });
            console.log("[LEAD API] Email notification sent successfully");
        } catch (emailError) {
            console.error("[LEAD API] Failed to send email:", emailError);
            // Don't fail the whole request if email fails
        }

        // Log the lead
        console.log("=".repeat(60));
        console.log("[LEAD API] New lead received at", new Date().toISOString());
        console.log("=".repeat(60));
        console.log(JSON.stringify(lead, null, 2));
        console.log("=".repeat(60));

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("[LEAD API] Error processing lead:", error);

        return NextResponse.json(
            { ok: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
