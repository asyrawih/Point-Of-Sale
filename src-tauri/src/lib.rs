#[cfg_attr(mobile, tauri::mobile_entry_point)]

mod title_bar;

use title_bar::{maximize_window, minimize_window, close_window};


pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            maximize_window,
            minimize_window,
            close_window,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}