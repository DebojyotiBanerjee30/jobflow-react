import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { applicationSchema } from "../../schemas/applicationSchema";
import InputField from "../ui/InputField";
import SelectField from "../ui/SelectField";
import Button from "../ui/Button";
import SkillsInput from "./SkillsInput";

const statusOptions = [
  { label: "Applied", value: "Applied" },
  { label: "Interview", value: "Interview" },
  { label: "Offer", value: "Offer" },
  { label: "Rejected", value: "Rejected" },
];

const defaultFormData = {
  company: "",
  position: "",
  status: "Applied",
  appliedDate: "",
  salary: "",
  location: "",
  experience: "",
  recruiterName: "",
  followUpDate: "",
  skills: [],
};

const ApplicationForm = ({
  title,
  description,
  submitLabel,
  loadingLabel,
  onSubmit,
  isLoading,
  error,
  initialValues,
}) => {
  const {
    register,
    control,
    handleSubmit: rhfHandleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(applicationSchema),
    defaultValues: defaultFormData,
  });

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
    }
  }, [initialValues, reset]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

            <p className="mt-2 text-gray-600">{description}</p>
          </div>

          <form onSubmit={rhfHandleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField
                label="Company"
                {...register("company")}
                placeholder="Company name"
                error={errors.company?.message}
              />

              <InputField
                label="Position"
                {...register("position")}
                placeholder="Job title"
                error={errors.position?.message}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <SelectField
                label="Status"
                {...register("status")}
                options={statusOptions}
                error={errors.status?.message}
              />

              <InputField
                label="Applied Date"
                type="date"
                {...register("appliedDate")}
                error={errors.appliedDate?.message}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField
                label="Salary"
                type="number"
                {...register("salary", {
                  valueAsNumber: true,
                })}
                placeholder="Annual Salary"
                step={1}
                error={errors.salary?.message}
              />

              <InputField
                label="Experience"
                type="number"
                {...register("experience", {
                  valueAsNumber: true,
                })}
                placeholder="Years of Experience"
                step={0.5}
                error={errors.experience?.message}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField
                label="Location"
                {...register("location")}
                placeholder="Job location"
                error={errors.location?.message}
              />

              <InputField
                label="Recruiter Name"
                {...register("recruiterName")}
                placeholder="Recruiter name"
                error={errors.recruiterName?.message}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField
                label="Follow-up Date"
                type="date"
                {...register("followUpDate")}
                error={errors.followUpDate?.message}
              />

              <Controller
                name="skills"
                control={control}
                render={({ field, fieldState }) => (
                  <SkillsInput
                    label="Skills"
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>

            <div className="mt-8">
              <div className="flex justify-end gap-4">
                <Button variant="secondary">Cancel</Button>

                <Button type="submit" disabled={isLoading}>
                  {isLoading ? loadingLabel : submitLabel}
                </Button>
              </div>

              {error && (
                <p
                  className="mt-2 text-right text-sm text-red-600"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
