import NavigationMenu from '../NavMenu/NavMenu.jsx';

export default function Layout({ children }) {
  return (
    <div>
      <NavigationMenu />
      {children}
    </div>
  );
}
