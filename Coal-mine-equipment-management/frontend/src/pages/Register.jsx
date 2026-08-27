import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Operator",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!acceptedTerms) {
      alert("Please accept the Terms of Service");
      return;
    }

    try {
      setLoading(true);

      await registerUser(formData);

      alert("Registration Successful!");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-4 py-10">

      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 rounded-3xl p-10 shadow-2xl">

        {/* Logo */}

        <div className="flex flex-col items-center mb-8">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-3xl shadow-lg">

            ⛏

          </div>

          <h2 className="text-amber-400 text-3xl font-bold mt-4">
            MineTrack
          </h2>

        </div>

        {/* Heading */}

        <h1 className="text-4xl font-bold text-center text-white">
          Create Your Account
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Register to access MineTrack
        </p>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
          />

          <div>

            <label className="block text-gray-300 text-sm font-medium mb-2">

              Account Type

            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white outline-none focus:border-amber-400"
            >
              <option value="Operator">Operator</option>
              <option value="Engineer">Engineer</option>
            </select>

          </div>

          <div className="flex items-start gap-3">

            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) =>
                setAcceptedTerms(e.target.checked)
              }
              className="mt-1 accent-amber-500"
            />

            <p className="text-sm text-gray-400">

              I agree to the Terms of Service and Privacy Policy.

            </p>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-[1.02] rounded-xl py-3.5 text-white font-semibold disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

        </form>

        {/* Footer */}

        <p className="text-center text-gray-400 mt-8">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-amber-400 font-semibold hover:text-amber-300 hover:underline"
          >
            Sign In
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;