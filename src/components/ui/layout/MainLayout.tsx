import { AppTitleBar } from '../menu/AppTitleBar';
import { Sidebar } from './Sidebar';
import { ReactNode } from 'react';

interface MainLayoutProps {
    children?: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="h-screen flex flex-col">
            <AppTitleBar />
            <div className="flex-1 flex">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}; 