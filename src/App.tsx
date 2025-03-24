import { MainLayout } from './components/ui/layout/MainLayout';
import { Outlet } from '@tanstack/react-router';

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
