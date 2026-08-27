import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import EquipmentTable from "../components/equipment/EquipmentTable";
import EquipmentModal from "../components/equipment/EquipmentModal";
import { getEquipments } from "../services/equipmentService";
import { Plus, Search } from "lucide-react";

function Equipment() {
  const [equipments, setEquipments] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchEquipments();
  }, []);

  useEffect(() => {
    let data = [...equipments];

    if (status !== "All") {
      data = data.filter((item) => item.status === status);
    }

    if (search !== "") {
      data = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.equipmentId.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredEquipments(data);
  }, [search, status, equipments]);

  const fetchEquipments = async () => {
    try {
      const res = await getEquipments();

      setEquipments(res.data);

      setFilteredEquipments(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      {/* Heading */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Equipment Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage all mining equipment across mining sites.
          </p>

        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 transition px-6 py-3 rounded-xl text-white font-semibold"
        >
          <Plus size={20} />

          Add Equipment
        </button>

      </div>

      {/* Filters */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">

        <div className="grid lg:grid-cols-2 gap-6">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Equipment..."
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 py-3 text-white outline-none focus:border-amber-400"
            />

          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 text-white outline-none focus:border-amber-400"
          >
            <option>All</option>
            <option>Working</option>
            <option>Maintenance</option>
            <option>Out of Service</option>
          </select>

        </div>

      </div>

      {/* Table */}

      {loading ? (
        <div className="text-center text-white text-xl py-20">
          Loading Equipment...
        </div>
      ) : (
        <EquipmentTable
            equipments={filteredEquipments}
            refresh={fetchEquipments}
        />
      )}

      {showModal && (
        <EquipmentModal
          closeModal={() => setShowModal(false)}
          refresh={fetchEquipments}
        />
      )}
    </DashboardLayout>
  );
}

export default Equipment;