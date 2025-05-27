import DashboardHeader from "@/app/componentes/dashboardheader";

/**
 * Página para gestionar categorías de gasto.
 */
export default function Categorias() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <DashboardHeader title="Gestión de Categorías" />
      <p className="text-gray-700">Aquí podrás crear y eliminar categorías de gasto.</p>
    </div>
  );
}
