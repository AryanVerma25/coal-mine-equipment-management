import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { getFaults } from "../services/faultService";
import AssignEngineerModal from "../components/fault/AssignEngineerModal";

function FaultManagement() {
  const [faults, setFaults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFault, setSelectedFault] = useState(null);

  useEffect(() => {
    fetchFaults();
  }, []);

  const fetchFaults = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await getFaults(token);

      setFaults(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-white">
          Fault Management
        </h1>

        <p className="text-gray-400 mt-2">
          View and manage all reported equipment faults.
        </p>

      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="text-left px-6 py-4 text-gray-300">
                  Equipment
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  Fault
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  Priority
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  Status
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  Reported By
                </th>

                <th className="text-left px-6 py-4 text-gray-300">
                  Engineer
                </th>

                <th className="text-center px-6 py-4 text-gray-300">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center py-10 text-white"
                  >
                    Loading...
                  </td>

                </tr>

              ) : faults.length === 0 ? (

                <tr>

                  <td
                    colSpan="7"
                    className="text-center py-10 text-gray-400"
                  >
                    No Faults Reported
                  </td>

                </tr>

              ) : (

                faults.map((fault) => (

                  <tr
                    key={fault._id}
                    className="border-t border-slate-800 hover:bg-slate-800/40"
                  >

                    <td className="px-6 py-4 text-white">
                      {fault.equipment?.name}
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {fault.faultType}
                    </td>

                    <td className="px-6 py-4">

                      <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs">

                        {fault.priority}

                      </span>

                    </td>

                    <td className="px-6 py-4">

                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs">

                        {fault.status}

                      </span>

                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {fault.reportedBy?.name}
                    </td>

                    <td className="px-6 py-4 text-gray-300">
                      {fault.assignedEngineer?.name || "Not Assigned"}
                    </td>

                    <td className="px-6 py-4 text-center">

                      {fault.assignedEngineer ? (
                        <span className="text-green-400 font-medium">
                            Assigned
                        </span>
                        ) : (
                            <button
                                onClick={() => setSelectedFault(fault)}
                                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-white"
                            >
                            Assign
                            </button>
                        )}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

      {selectedFault && (
        <AssignEngineerModal
            fault={selectedFault}
            closeModal={() => setSelectedFault(null)}
            refresh={fetchFaults}
        />
        )}

    </DashboardLayout>
  );
}

export default FaultManagement;