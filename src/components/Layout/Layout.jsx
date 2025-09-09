import { Outlet } from 'react-router-dom';
import NavigationMenu from '../NavMenu/NavMenu.jsx';

export default function Layout() {
  return (
    <div>
      <NavigationMenu />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
