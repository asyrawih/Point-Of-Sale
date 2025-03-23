import {invoke} from "@tauri-apps/api/core";
import "../../../styles/titlebar.css";
import { Minus, Square, X } from 'lucide-react';

export const AppTitleBar = () => {
    const handleMinimize = async () => {
        await invoke("minimize_window").catch(console.error);
    }
    const handleMaximize = async () => {
        await invoke("maximize_window").catch(console.error);
    }
    const handleClose = async () => {
        await invoke("close_window").catch(console.error);
    }

    return (
        <>
            <div 
                id="titlebar" 
                className="h-8 bg-white border-b flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50"
            >
                <div 
                    id="drag-region" 
                    className="flex items-center gap-2 flex-1 h-full"
                >
                    <img src="https://placehold.co/20x20" alt="Logo" className="w-5 h-5 rounded" />
                    <span className="text-sm font-medium text-gray-700">Point Of Sales</span>
                </div>
                <div id="window-controls" className="flex items-center gap-1">
                    <button 
                        onClick={handleMinimize} 
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-sm"
                    >
                        <Minus className="w-4 h-4 text-gray-500" />
                    </button>
                    <button 
                        onClick={handleMaximize} 
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-sm"
                    >
                        <Square className="w-4 h-4 text-gray-500" />
                    </button>
                    <button 
                        onClick={handleClose} 
                        className="w-8 h-8 flex items-center justify-center hover:bg-red-100 rounded-sm"
                    >
                        <X className="w-4 h-4 text-gray-500" />
                    </button>
                </div>
            </div>
            <div className="h-8" /> {/* Spacer untuk mengompensasi fixed titlebar */}
        </>
    )
}
