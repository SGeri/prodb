#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// sleep: std::thread::sleep(std::time::Duration::from_millis(4000));

mod types {
    pub mod command_error;
}

mod commands {
    pub mod get_version;
    pub mod get_images;
}

use tauri::{Builder};
use commands::{get_version::get_version, get_images::get_images};

fn main() {
    Builder::default()
        .invoke_handler(tauri::generate_handler![get_version, get_images])
        .run(tauri::generate_context!())
        .expect("Error while running tauri application");
}
