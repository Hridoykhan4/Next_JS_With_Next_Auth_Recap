"use client";

import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaImage,
  FaDroplet,
  FaChevronDown,
} from "react-icons/fa6";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      contactNo: form.contactNo.value,
      password: form.password.value,
      image: form.image.value,
      bloodgroup: form.bloodgroup.value,
    };

    console.log("Submitted Data:", formData);
  };

  const inputClass =
    "w-full pl-10 pr-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm";

  return (
    <div className="w-full max-w-lg p-8 bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700/50">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          Create an Account
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Fill in the details below to register
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Full Name
          </label>
          <div className="relative flex items-center">
            <FaUser className="absolute left-3.5 text-slate-400 text-sm pointer-events-none" />
            <input
              type="text"
              name="name"
              placeholder="Enter your official name"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Email + Blood Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Email
            </label>
            <div className="relative flex items-center">
              <FaEnvelope className="absolute left-3.5 text-slate-400 text-sm pointer-events-none" />
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Blood Group
            </label>
            <div className="relative flex items-center">
              <FaDroplet className="absolute left-3.5 text-slate-400 text-sm pointer-events-none z-10" />
              <select
                name="bloodgroup"
                required
                className={`${inputClass} appearance-none cursor-pointer pr-10`}
              >
                <option value="" className="bg-slate-800">
                  Select
                </option>
                <option value="A+" className="bg-slate-800">
                  A+
                </option>
                <option value="A-" className="bg-slate-800">
                  A-
                </option>
                <option value="B+" className="bg-slate-800">
                  B+
                </option>
                <option value="B-" className="bg-slate-800">
                  B-
                </option>
                <option value="O+" className="bg-slate-800">
                  O+
                </option>
                <option value="O-" className="bg-slate-800">
                  O-
                </option>
                <option value="AB+" className="bg-slate-800">
                  AB+
                </option>
                <option value="AB-" className="bg-slate-800">
                  AB-
                </option>
              </select>
              <FaChevronDown className="absolute right-3.5 text-slate-400 text-xs pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Contact No + Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Contact Number
            </label>
            <div className="relative flex items-center">
              <FaPhone className="absolute left-3.5 text-slate-400 text-sm pointer-events-none" />
              <input
                type="tel"
                name="contactNo"
                placeholder="01XXXXXXXXX"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Password
            </label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3.5 text-slate-400 text-sm pointer-events-none" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* Image URL */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Profile Image URL
          </label>
          <div className="relative flex items-center">
            <FaImage className="absolute left-3.5 text-slate-400 text-sm pointer-events-none" />
            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className={inputClass}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full mt-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-emerald-900/30 active:scale-[0.99] cursor-pointer"
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;