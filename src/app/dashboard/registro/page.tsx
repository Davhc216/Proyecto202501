import DashboardHeader from '@/app/componentes/dashboardheader';

/**
 * Página para registrar ingresos o egresos.
 */
export default function Registro() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <DashboardHeader title="Registro de Movimientos" />
      <p className="text-gray-700">Aquí registrarás un ingreso o egreso con su categoría.</p>
    </div>
  );
}
