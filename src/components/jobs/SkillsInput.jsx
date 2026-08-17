import { useState, useRef } from "react";

const SkillsInput = ({
  label,
  value,
  onChange,
  placeholder = "Type a skill and press Enter",
  error,
}) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (inputValue.trim() === "") {
        return;
      }

      if (value.includes(inputValue.trim())) {
        return;
      }

      onChange([...value, inputValue.trim()]);

      setInputValue("");

      inputRef.current.focus();
    }
  };

  const handleRemoveSkills = (skill) => {
    onChange(value.filter((item) => item !== skill));

    inputRef.current.focus();
  };

  return (
    <div>
      <label
        htmlFor="skills"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="rounded-lg border border-gray-300  px-4 py-2">
        <div className="mb-2 flex flex-wrap gap-2">
          {value.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {skill}

              <button
                aria-label={`Remove ${skill}`}
                className="font-bold hover:text-red-600"
                type="button"
                onClick={() => handleRemoveSkills(skill)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <input
          id="skills"
          ref={inputRef}
          className="mt-1 w-full bg-transparent outline-none"
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

export default SkillsInput;
