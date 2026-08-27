import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getEquipments } from "../services/equipmentService";
import { reportFault } from "../services/faultService";

function ReportFault() {
  const [equipments, setEquipments] = useState([]);

  const [formData, setFormData] = useState({
    equipment: "",
    faultType: "",
    priority: "Medium",
    description: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEquipments();
  }, []);

  const fetchEquipments = async () => {
    try {
      const res = await getEquipments();
      setEquipments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

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

      const token = localStorage.getItem("token");

      await reportFault(formData, token);

      alert("Fault Reported Successfully");

      setFormData({
        equipment: "",
        faultType: "",
        priority: "Medium",
        description: "",
        image: "",
      });

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Unable to report fault");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold text-white mb-2">
        Report Fault
      </h1>

      <p className="text-gray-400 mb-8">
        Report equipment issues for maintenance.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6"
        >

          {/* Equipment */}

          <select
            name="equipment"
            value={formData.equipment}
            onChange={handleChange}
            required
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          >
            <option value="">Select Equipment</option>

            {equipments.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>

          {/* Fault Type */}

          <input
            type="text"
            name="faultType"
            placeholder="Fault Type"
            value={formData.faultType}
            onChange={handleChange}
            required
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          />

          {/* Priority */}

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>

          {/* Image */}

          <input
            type="text"
            name="image"
            placeholder="Image URL (Optional)"
            value={formData.image}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          />

          {/* Description */}

          <textarea
            rows="5"
            name="description"
            placeholder="Describe the issue..."
            value={formData.description}
            onChange={handleChange}
            required
            className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-xl p-3 text-white resize-none"
          />

          <div className="md:col-span-2 flex justify-end">

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold"
            >
              {loading ? "Submitting..." : "Submit Fault"}
            </button>

          </div>

        </form>

      </div>

    </DashboardLayout>
  );
}

export default ReportFault;