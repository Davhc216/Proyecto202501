'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/**
 * Página de inicio del dashboard.
 * Muestra un resumen de módulos disponibles con enlaces visuales.
 */
const Dashboard = () => {
  const router = useRouter();

  // Lista de módulos con sus rutas
  const modules = [
    { name: 'Resumen Financiero', path: '/dashboard/resumen' },
    { name: 'Categorías de Gasto', path: '/dashboard/categorias' },
    { name: 'Registrar Movimiento', path: '/dashboard/registro' },
    { name: 'Lista de Movimientos', path: '/dashboard/listado' },
    { name: 'Análisis Financiero', path: '/dashboard/analisis' },
  ];

  // Función de cerrar sesión
  const handleLogout = () => {
    router.push('/auth');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Finanzas App</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Módulos representados como tarjetas */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((mod) => (
          <Link href={mod.path} key={mod.name}>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg cursor-pointer transition">
              <h2 className="text-xl font-semibold text-blue-600">{mod.name}</h2>
              <p className="text-sm text-gray-500 mt-2">Ir al módulo</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
// Este componente representa la página principal del dashboard
// y muestra enlaces a los diferentes módulos disponibles.