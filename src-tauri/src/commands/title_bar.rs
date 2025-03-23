use tauri::{Manager, Window, plugin::{Builder, TauriPlugin}};
use tauri::Wry;

#[tauri::command]
pub fn minimize_window(app_handle: Window) {
    let window = app_handle.get_window("main").unwrap();
    window.minimize().unwrap();
}

#[tauri::command]
pub fn close_window(app_handle: Window) {
    let window = app_handle.get_window("main").unwrap();
    window.close().unwrap();
}

#[tauri::command]
pub fn maximize_window(app_handle: Window) {
    let window = app_handle.get_window("main").unwrap();
    if window.is_maximized().unwrap() {
        window.unmaximize().unwrap();
    }else {
        window.maximize().unwrap();
    }
}

pub fn register() -> TauriPlugin<Wry> {
    Builder::<Wry>::new("commands")
        .invoke_handler(tauri::generate_handler![minimize_window, close_window, maximize_window])
        .build()
}
