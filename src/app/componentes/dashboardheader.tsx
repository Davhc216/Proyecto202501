'use client';

import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

interface Props {
  title: string; // Título dinámico que se mostrará en el header
}

/**
 * Header reutilizable para las páginas del dashboard.
 * Incluye botones para volver al dashboard y cerrar sesión.
 */
const DashboardHeader: React.FC<Props> = ({ title }) => {
  const router = useRouter();
  const path = usePathname(); // Para saber en qué ruta estás actualmente

  // Lógica para cerrar sesión (cuando haya backend limpiará el token)
  const handleLogout = () => {
    router.push('/auth');
  };

  // Redirige a la página principal del dashboard
  const handleBackToDashboard = () => {
    router.push('/dashboard');
  };

  // Solo muestra el botón de "volver" si no estás en el dashboard
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
// Este componente se puede usar en cualquier página del dashboard
// para mantener una consistencia en el header y facilitar la navegación.