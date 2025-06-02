'use client'; // Marca este archivo como un componente del lado del cliente, necesario para hooks como useState o useRouter.

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook para redireccionar sin recargar la página.

/**
 * Página de autenticación unificada que alterna entre Login y Registro.
 */
const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado que define si se muestra el formulario de login o de registro.
  const router = useRouter(); // Permite redirección programática.

  // Alterna entre login y registro
  const toggleForm = () => setIsLogin(!isLogin);

  // Simulación de envío de formulario (registro o login)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Redirige al dashboard (lógica real se hará cuando se conecte al backend)
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center">
          {isLogin ? 'Iniciar Sesión' : 'Registro de Usuario'}
        </h2>

        {/* Formulario de login o registro */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Solo se muestra el campo "Nombre" si es registro */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>

          {/* Botón principal */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>

        {/* Enlace para alternar entre login y registro */}
        <div className="text-center">
          <button
            onClick={toggleForm}
            className="text-blue-600 hover:underline text-sm"
          >
            {isLogin
              ? '¿No tienes cuenta? Regístrate aquí'
              : '¿Ya tienes cuenta? Inicia sesión'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
