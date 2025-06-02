import { redirect } from 'next/navigation';

/**
 * Redirige automáticamente a la página de autenticación (/auth)
 * cuando se accede a la raíz del sitio (/).
 */
export default function Home() {
  redirect('/auth');
}
