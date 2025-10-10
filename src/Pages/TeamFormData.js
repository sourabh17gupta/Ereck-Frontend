import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { submitTeamMember } from "../api/Services/TeamData";

function FormFillPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    InstagramId: "",
    LinkdinId: "",
    Position: "",
    TeamName: "",
    Image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission

  function changeHandler(e) {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData((prev) => ({ ...prev, Image: file }));

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitTeamMember(formData);
      toast.success("Team member added successfully!");
      setIsSubmitted(true); // Mark as submitted
      setFormData({
        name: "",
        email: "",
        InstagramId: "",
        LinkdinId: "",
        Position: "",
        TeamName: "",
        Image: null,
      });
      setImagePreview(null);
    } catch (error) {
      toast.error("Error submitting data!");
    }
  };

  // If submitted, show a success page
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#1f1b00] via-[#2c2500] to-[#3b3200] text-white p-4">
        <h1 className="text-4xl font-bold text-[#FFC107] mb-4">
          Submission Successful!
        </h1>
        <p className="text-gray-300 mb-6 text-center">
          Your details have been submitted successfully.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center bg-gradient-to-br from-[#1f1b00] via-[#2c2500] to-[#3b3200] text-white py-8 px-4">
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-extrabold text-[#FFC107] drop-shadow-md">
          Team Member Data
        </h1>
        <p className="text-gray-300 text-sm mt-1">
          Add details of your team member below
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-[#2a2400]/90 p-6 rounded-xl shadow-lg border border-[#FFC107]/40 w-full max-w-md sm:max-w-lg space-y-3"
      >
        <FormField label="Full Name" name="name" value={formData.name} onChange={changeHandler} />
        <FormField label="Email" type="email" name="email" value={formData.email} onChange={changeHandler} />
        <FormField label="Instagram ID" name="InstagramId" value={formData.InstagramId} onChange={changeHandler} />
        <FormField label="LinkedIn ID" name="LinkdinId" value={formData.LinkdinId} onChange={changeHandler} />

        {/* Position Dropdown */}
        <div>
          <label className="block mb-1 text-[#FFC107] text-sm font-semibold">Position</label>
          <select
            name="Position"
            value={formData.Position}
            onChange={changeHandler}
            className="w-full p-2 rounded-md bg-[#3b3200] border border-[#FFC107]/40 focus:border-[#FFC107] focus:outline-none text-sm"
            required
          >
            <option value="">Select Position</option>
            <option value="head">Head</option>
            <option value="member">Member</option>
          </select>
        </div>

        {/* TeamName Dropdown */}
        <div>
          <label className="block mb-1 text-[#FFC107] text-sm font-semibold">Team Name</label>
          <select
            name="TeamName"
            value={formData.TeamName}
            onChange={changeHandler}
            className="w-full p-2 rounded-md bg-[#3b3200] border border-[#FFC107]/40 focus:border-[#FFC107] focus:outline-none text-sm"
            required
          >
            <option value="">Select Team</option>
            <option value="managment">Management</option>
            <option value="design">Design</option>
            <option value="contentwriting">Content Writing</option>
            <option value="core">Core</option>
          </select>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 text-[#FFC107] text-sm font-semibold">Upload Image</label>
          <input
            type="file"
            name="Image"
            accept="Image/*"
            onChange={changeHandler}
            className="w-full p-1.5 rounded-md bg-[#3b3200] border border-[#FFC107]/40 focus:border-[#FFC107] focus:outline-none text-sm"
          />
        </div>

        {imagePreview && (
          <div className="flex justify-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 h-20 w-20 rounded-full border border-[#FFC107] object-cover shadow-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full mt-3 bg-[#FFC107] text-black font-semibold py-2 rounded-md hover:bg-[#e0a800] transition text-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

const FormField = ({ label, type = "text", name, value, onChange }) => (
  <div>
    <label className="block mb-1 text-[#FFC107] text-sm font-semibold">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label.toLowerCase()}`}
      className="w-full p-2 rounded-md bg-[#3b3200] border border-[#FFC107]/40 focus:border-[#FFC107] focus:outline-none text-sm"
    />
  </div>
);

export default FormFillPage;
