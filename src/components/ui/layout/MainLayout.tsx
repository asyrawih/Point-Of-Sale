import { AppTitleBar } from '../menu/AppTitleBar';
import { MenuGrid } from '../menu/MenuGrid';
import { OrderPanel } from './OrderPanel';

export const MainLayout = () => {
    return (
        <div className="h-screen flex flex-col">
            <AppTitleBar />
            <div className="flex-1 flex">
                <div className="flex-1 overflow-y-auto">
                    <MenuGrid />
                </div>
                <OrderPanel />
            </div>
        </div>
    );
}; 