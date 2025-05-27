import DashboardHeader from "@/app/componentes/dashboardheader";

/**
 * Página de resumen financiero visual (por ahora solo título).
 */
export default function Resumen() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <DashboardHeader title="Resumen de Finanzas" />
      <p className="text-gray-700">Aquí irá el resumen visual de ingresos, egresos y saldo.</p>
    </div>
  );
}
