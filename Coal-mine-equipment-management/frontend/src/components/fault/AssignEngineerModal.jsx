import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { getEngineers } from "../../services/authService";
import { assignEngineer } from "../../services/faultService";

function AssignEngineerModal({
  fault,
  closeModal,
  refresh,
}) {
  const [engineers, setEngineers] = useState([]);
  const [engineerId, setEngineerId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEngineers();
  }, []);

  const fetchEngineers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await getEngineers(token);

      setEngineers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssign = async () => {
    if (!engineerId) {
      alert("Please select an engineer");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await assignEngineer(
        fault._id,
        engineerId,
        token
      );

      alert("Engineer Assigned Successfully");

      refresh();

      closeModal();

    } catch (error) {
      console.log(error);
      alert("Unable to assign engineer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-8">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-white">
            Assign Engineer
          </h2>

          <button onClick={closeModal}>
            <X className="text-white" />
          </button>

        </div>

        <div className="space-y-5">

          <div>

            <label className="text-gray-400">
              Equipment
            </label>

            <p className="text-white font-semibold">
              {fault.equipment?.name}
            </p>

          </div>

          <div>

            <label className="text-gray-400">
              Fault
            </label>

            <p className="text-white">
              {fault.faultType}
            </p>

          </div>

          <select
            value={engineerId}
            onChange={(e) =>
              setEngineerId(e.target.value)
            }
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-white"
          >
            <option value="">
              Select Engineer
            </option>

            {engineers.map((engineer) => (
              <option
                key={engineer._id}
                value={engineer._id}
              >
                {engineer.name}
              </option>
            ))}

          </select>

          <div className="flex justify-end gap-3">

            <button
              onClick={closeModal}
              className="px-5 py-3 rounded-xl bg-slate-700 text-white"
            >
              Cancel
            </button>

            <button
              onClick={handleAssign}
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white"
            >
              {loading
                ? "Assigning..."
                : "Assign Engineer"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AssignEngineerModal;