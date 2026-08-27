import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { deleteEquipment } from "../../services/equipmentService";
import EquipmentModal from "./EquipmentModal";

function EquipmentTable({ equipments,refresh }) {
  const [deleting, setDeleting] = useState(false);
  const [editingEquipment, setEditingEquipment] = useState(null);
  const statusBadge = (status) => {
    switch (status) {
      case "Working":
        return (
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold">
            Working
          </span>
        );

      case "Maintenance":
        return (
          <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-semibold">
            Maintenance
          </span>
        );

      default:
        return (
          <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-semibold">
            Out of Service
          </span>
        );
    }
  };
  const handleDelete = async (item) => {
  const confirmDelete = window.confirm(
    `Delete ${item.name} (${item.equipmentId})?`
  );

  if (!confirmDelete) return;

  try {
    setDeleting(true);

    const token = localStorage.getItem("token");

    const res = await deleteEquipment(item._id, token);

    console.log(res);

    await refresh();

  } catch (error) {
    console.log(error);

    if (error.response?.status !== 200) {
      alert(
        error.response?.data?.message ||
          "Unable to delete equipment."
      );
    }
  } finally {
    setDeleting(false);
  }
};

  return (
    <>
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-800">

            <tr>

              <th className="text-left px-6 py-4 text-gray-300">
                Image
              </th>

              <th className="text-left px-6 py-4 text-gray-300">
                Equipment
              </th>

              <th className="text-left px-6 py-4 text-gray-300">
                Model
              </th>

              <th className="text-left px-6 py-4 text-gray-300">
                Location
              </th>

              <th className="text-left px-6 py-4 text-gray-300">
                Status
              </th>

              <th className="text-left px-6 py-4 text-gray-300">
                Health
              </th>

              <th className="text-center px-6 py-4 text-gray-300">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {equipments.length === 0 ? (

              <tr>

                <td
                  colSpan="7"
                  className="text-center text-gray-400 py-12"
                >
                  No Equipment Found
                </td>

              </tr>

            ) : (

              equipments.map((item) => (

                <tr
                  key={item._id}
                  className="border-t border-slate-800 hover:bg-slate-800/40 transition"
                >

                  {/* Image */}

                  <td className="px-6 py-4">

                    <img
                      src={
                        item.image ||
                        "https://placehold.co/80x80/1e293b/f8fafc?text=Mine"
                      }
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover border border-slate-700"
                    />

                  </td>

                  {/* Equipment */}

                  <td className="px-6 py-4">

                    <h3 className="text-white font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      {item.equipmentId}
                    </p>

                  </td>

                  {/* Model */}

                  <td className="px-6 py-4 text-gray-300">
                    {item.model}
                  </td>

                  {/* Location */}

                  <td className="px-6 py-4 text-gray-300">
                    {item.location}
                  </td>

                  {/* Status */}

                  <td className="px-6 py-4">
                    {statusBadge(item.status)}
                  </td>

                  {/* Health */}

                  <td className="px-6 py-4">

                    <div className="w-36">

                      <div className="flex justify-between text-sm text-gray-400 mb-1">

                        <span>{item.health}%</span>

                      </div>

                      <div className="h-2 rounded-full bg-slate-700">

                        <div
                          style={{ width: `${item.health}%` }}
                          className={`h-2 rounded-full ${
                            item.health >= 80
                              ? "bg-green-500"
                              : item.health >= 50
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        ></div>

                      </div>

                    </div>

                  </td>

                  {/* Actions */}

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      <button 
                      onClick={() => setEditingEquipment(item)}
                      className="w-10 h-10 rounded-lg bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white transition flex items-center justify-center">

                        <Edit size={18} />

                      </button>

                      <button
                        onClick={() => handleDelete(item)}
                        disabled={deleting}
                        className="w-10 h-10 rounded-lg bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  {editingEquipment && (
    <EquipmentModal
      equipment={editingEquipment}
      closeModal={() => setEditingEquipment(null)}
      refresh={refresh}
    />
  )}
  </>
);
}

export default EquipmentTable;