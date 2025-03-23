import { AppTitleBar } from '../menu/AppTitleBar';
import { MenuGrid } from '../menu/MenuGrid';
import { OrderPanel } from './OrderPanel';
import { Sidebar } from './Sidebar';

export const MainLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            <AppTitleBar />
            <div className="flex-1 flex">
                <Sidebar />
                <div className="flex-1 overflow-y-auto">
                    <MenuGrid />
                </div>
                <OrderPanel />
            </div>
        </div>
    );
}; 