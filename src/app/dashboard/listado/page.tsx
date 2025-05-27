import DashboardHeader from '@/app/componentes/dashboardheader';

/**
 * Página que muestra lista de ingresos y egresos.
 */
export default function Listado() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <DashboardHeader title="Listado de Movimientos" />
      <p className="text-gray-700">Aquí verás el historial de tus ingresos y egresos.</p>
    </div>
  );
}
