import { Outlet } from 'react-router-dom';
import { Header } from '../components';

export function DefaultLayout() {
  return (
    <main>
      <Header />

      <div className="flex min-h-[calc(100vh-80px)] bg-gray-500 px-4">
        <Outlet />
      </div>
    </main>
  );
}
