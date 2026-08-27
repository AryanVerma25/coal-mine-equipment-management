import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginUser(formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
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

        <h1 className="text-4xl font-bold text-center text-white">
          Welcome Back
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Sign in to continue
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
          />

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3.5 px-4 pr-20 text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-amber-400 text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          <div className="flex justify-between items-center">

            <label className="flex items-center gap-2 text-gray-400 text-sm">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
                className="accent-amber-500"
              />

              Remember Me

            </label>

            <button
              type="button"
              className="text-amber-400 text-sm hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition-all duration-300 hover:scale-[1.02] rounded-xl py-3.5 text-white font-semibold disabled:opacity-70"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

        <p className="text-center text-gray-400 mt-8">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-amber-400 font-semibold hover:text-amber-300 hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;