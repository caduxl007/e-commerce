import { Outlet } from 'react-router-dom';
import { Header } from '../components';

export function DefaultLayout() {
  return (
    <main>
      <Header />

      <div className="bg-gray-500 px-4">
        <Outlet />
      </div>
    </main>
  );
}
