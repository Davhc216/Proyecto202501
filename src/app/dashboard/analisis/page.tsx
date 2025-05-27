import DashboardHeader from '@/app/componentes/dashboardheader';

/**
 * Página de análisis financiero (promedios, ahorro, etc).
 */
export default function Analisis() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <DashboardHeader title="Análisis Financiero" />
      <p className="text-gray-700">Aquí se mostrarán estadísticas y gráficos de tu actividad financiera.</p>
    </div>
  );
}
