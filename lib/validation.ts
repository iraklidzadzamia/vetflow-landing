import { z } from "zod";

export const leadFormSchema = z.object({
    clinic_name: z
        .string()
        .min(2, "Clinic name must be at least 2 characters")
        .max(100, "Clinic name must be less than 100 characters"),

    contact_name: z
        .string()
        .min(2, "Contact name must be at least 2 characters")
        .max(100, "Contact name must be less than 100 characters"),

    email: z
        .string()
        .email("Please enter a valid email address"),

    phone: z
        .string()
        .max(20, "Phone number is too long")
        .regex(/^[\d\s\-\+\(\)]*$/, "Please enter a valid phone number")
        .optional()
        .or(z.literal("")),

    website: z
        .string()
        .url("Please enter a valid URL")
        .optional()
        .or(z.literal("")),

    current_booking_system: z
        .string()
        .min(1, "Please select your current booking system"),

    message: z
        .string()
        .max(1000, "Message must be less than 1000 characters")
        .optional()
        .or(z.literal("")),

    // Honeypot field - should always be empty
    company_website_hidden: z
        .string()
        .max(0, "Invalid submission")
        .optional()
        .or(z.literal("")),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const validateLeadForm = (data: unknown) => {
    return leadFormSchema.safeParse(data);
};
