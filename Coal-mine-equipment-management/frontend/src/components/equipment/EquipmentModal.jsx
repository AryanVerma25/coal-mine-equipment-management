import { useState } from "react";
import { X } from "lucide-react";
import {
  addEquipment,
  updateEquipment,
} from "../../services/equipmentService";
function EquipmentModal({
  closeModal,
  refresh,
  equipment = null,
}) {
  const [formData, setFormData] = useState(
  equipment || {
    equipmentId: "",
    name: "",
    model: "",
    location: "",
    status: "Working",
    health: 100,
    image: "",
    purchaseDate: "",
  }
);

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

      const token = localStorage.getItem("token");

      if (equipment) {
  await updateEquipment(
    equipment._id,
    formData,
    token
  );
} else {
  await addEquipment(
    formData,
    token
  );
}

      refresh();

      closeModal();
    } catch (error) {
      console.log(error);
      alert("Unable to add equipment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl p-8">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-white">
            {equipment ? "Edit Equipment" : "Add Equipment"}
          </h2>

          <button onClick={closeModal}>
            <X className="text-white" />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          <input
            name="equipmentId"
            placeholder="Equipment ID"
            value={formData.equipmentId}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
            required
          />

          <input
            name="name"
            placeholder="Equipment Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
            required
          />

          <input
            name="model"
            placeholder="Model"
            value={formData.model}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
            required
          />

          <input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          >
            <option>Working</option>
            <option>Maintenance</option>
            <option>Out of Service</option>
          </select>

          <input
            type="number"
            name="health"
            min="0"
            max="100"
            value={formData.health}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          />

          <input
            name="image"
            placeholder="Image URL (Temporary)"
            value={formData.image}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          />

          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate}
            onChange={handleChange}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          />

          <div className="md:col-span-2 flex justify-end gap-4 mt-5">

            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-3 rounded-xl bg-slate-700 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold"
            >
              {loading ? "Saving..." : "Save Equipment"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EquipmentModal;