'use client';

import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  title: string; // Título que se muestra en la parte superior
}

/**
 * Encabezado común para páginas del dashboard.
 * Incluye botón de cierre de sesión y regresar al dashboard si no estás ya ahí.
 */
const DashboardHeader: React.FC<Props> = ({ title }) => {
  const router = useRouter();
  const path = usePathname();

  const handleLogout = () => {
    
    router.push('/auth');
  };

  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  const isInDashboard = path === '/dashboard';

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex gap-2">
        {!isInDashboard && (
          <button
            onClick={handleBackToDashboard}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Volver al Dashboard
          </button>
        )}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
