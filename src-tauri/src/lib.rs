#[cfg_attr(mobile, tauri::mobile_entry_point)]

mod commands;

use commands::register;


pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(register())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}