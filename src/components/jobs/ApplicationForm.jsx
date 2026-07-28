import { useState } from "react";
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

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
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
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSkillsChange = (newSkills) => {
    setFormData((prev) => ({
      ...prev,
      skills: newSkills,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Add Application
            </h1>

            <p className="mt-2 text-gray-600">
              Fill out the information below to create a new job application.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                required
              />

              <InputField
                label="Position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Job title"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <SelectField
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                options={statusOptions}
                required
              />

              <InputField
                label="Applied Date"
                type="date"
                name="appliedDate"
                value={formData.appliedDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField
                label="Salary"
                type="number"
                name="salary"
                value={formData.salary}
                placeholder="Annual Salary"
                onChange={handleChange}
                min={0}
                step={1}
                required
              />

              <InputField
                label="Experience"
                type="number"
                name="experience"
                value={formData.experience}
                placeholder="Years of Experience"
                onChange={handleChange}
                min={0}
                step={0.5}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Job location"
              />

              <InputField
                label="Recruiter Name"
                name="recruiterName"
                value={formData.recruiterName}
                onChange={handleChange}
                placeholder="Recruiter name"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField
                label="Follow-up Date"
                type="date"
                name="followUpDate"
                value={formData.followUpDate}
                onChange={handleChange}
              />

              <SkillsInput
                label="Skills"
                value={formData.skills}
                onChange={handleSkillsChange}
              />
            </div>

            <div className="mt-8 flex justify-end gap-4">
              <Button variant="secondary">Cancel</Button>

              <Button type="submit">Save Application</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
