import { z } from "zod";

export const applicationSchema = z.object({
  company: z.string().min(1, "Company is required"),
  position: z.string().min(1, "Position is required"),
  status: z.enum(["Applied", "Interview", "Offer", "Rejected"]),
  appliedDate: z.string().min(1, "Applied date is required"),
  salary: z.preprocess(
    (value) => (Number.isNaN(value) ? undefined : value),
    z
      .number({
        error: "Salary is required",
      })
      .min(0, "Salary cannot be negative"),
  ),
  experience: z.preprocess(
    (value) => (Number.isNaN(value) ? undefined : value),
    z
      .number({
        error: "Experience is required",
      })
      .min(0, "Experience cannot be negative"),
  ),
  location: z.string().optional(),
  recruiterName: z.string().optional(),
  followUpDate: z.string().optional(),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
});
