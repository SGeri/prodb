#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// sleep: std::thread::sleep(std::time::Duration::from_millis(4000));

mod types {
    pub mod command_error;
}

mod commands {
    pub mod check_docker;
}

use commands::{check_docker::check_docker};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![check_docker])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
