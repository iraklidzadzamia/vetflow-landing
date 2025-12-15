import { NextResponse } from "next/server";
import { leadFormSchema, type LeadFormData } from "@/lib/validation";

// In-memory storage for leads (for development/demo)
const leads: LeadFormData[] = [];

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

        // Store the lead
        const lead: LeadFormData = {
            clinic_name: result.data.clinic_name,
            contact_name: result.data.contact_name,
            email: result.data.email,
            phone: result.data.phone,
            website: result.data.website || "",
            current_booking_system: result.data.current_booking_system,
            message: result.data.message || "",
        };

        leads.push(lead);

        // Log the lead in a structured format
        console.log("=".repeat(60));
        console.log("[LEAD API] New lead received at", new Date().toISOString());
        console.log("=".repeat(60));
        console.log(JSON.stringify(lead, null, 2));
        console.log("=".repeat(60));
        console.log(`[LEAD API] Total leads stored: ${leads.length}`);
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

// Optional: GET endpoint to view leads (for development only)
export async function GET() {
    if (process.env.NODE_ENV === "production") {
        return NextResponse.json({ error: "Not available" }, { status: 403 });
    }

    return NextResponse.json({ leads, count: leads.length });
}
