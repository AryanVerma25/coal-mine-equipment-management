import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/dashboard/StatCard";
import EquipmentTable from "../components/equipment/EquipmentTable";
import EquipmentModal from "../components/equipment/EquipmentModal";
import { getEquipments } from "../services/equipmentService";

import {
  Package,
  CheckCircle,
  Wrench,
  AlertTriangle,
  Plus,
  Search,
} from "lucide-react";

function Equipment() {
  const [equipments, setEquipments] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [showModal, setShowModal] = useState(false);

  const fetchEquipments = async () => {
    try {
      setLoading(true);

      const res = await getEquipments();

      setEquipments(res.data);
      setFilteredEquipments(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  useEffect(() => {
    let data = [...equipments];

    if (statusFilter !== "All") {
      data = data.filter((item) => item.status === statusFilter);
    }

    if (search.trim() !== "") {
      data = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.equipmentId.toLowerCase().includes(search.toLowerCase()) ||
          item.model.toLowerCase().includes(search.toLowerCase()) ||
          item.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredEquipments(data);
  }, [search, statusFilter, equipments]);

  const totalEquipment = equipments.length;

  const workingEquipment = equipments.filter(
    (item) => item.status === "Working"
  ).length;

  const maintenanceEquipment = equipments.filter(
    (item) => item.status === "Maintenance"
  ).length;

  const outOfServiceEquipment = equipments.filter(
    (item) => item.status === "Out of Service"
  ).length;

  return (
    <DashboardLayout>
      {/* Heading */}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Equipment Management
          </h1>

          <p className="text-gray-400 mt-2">
            Manage and monitor all mining equipment across operational sites.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
        >
          <Plus size={20} />
          Add Equipment
        </button>
      </div>

      {/* Summary Cards */}

      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
        <StatCard
          title="Total Equipment"
          value={totalEquipment}
          subtitle="Across all mining sites"
          icon={<Package size={26} />}
          color="bg-amber-500"
        />

        <StatCard
          title="Working"
          value={workingEquipment}
          subtitle="Operational"
          icon={<CheckCircle size={26} />}
          color="bg-green-500"
        />

        <StatCard
          title="Maintenance"
          value={maintenanceEquipment}
          subtitle="Under Service"
          icon={<Wrench size={26} />}
          color="bg-yellow-500"
        />

        <StatCard
          title="Out of Service"
          value={outOfServiceEquipment}
          subtitle="Requires Attention"
          icon={<AlertTriangle size={26} />}
          color="bg-red-500"
        />
      </div>

      {/* Search & Filter */}

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search by Name, Equipment ID, Model or Location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white focus:border-amber-400 outline-none transition"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:border-amber-400 outline-none transition"
          >
            <option value="All">All Status</option>
            <option value="Working">Working</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Out of Service">Out of Service</option>
          </select>
        </div>
      </div>

      {/* Equipment Table */}

      {loading ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl py-24 text-center">
          <div className="text-amber-400 text-xl font-semibold">
            Loading Equipment...
          </div>
        </div>
      ) : (
        <EquipmentTable
          equipments={filteredEquipments}
          refresh={fetchEquipments}
        />
      )}

      {/* Modal */}

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