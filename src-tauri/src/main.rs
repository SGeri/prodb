#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::env;
use std::process::Command;
use std::str;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn check_docker() -> bool {
    let output = Command::new("docker").arg("--version").output().unwrap_or_else(|e| {
        panic!("failed to execute process: {}", e)
    });

    let output_str = str::from_utf8(&output.stdout).unwrap();
    
    output_str.contains("Docker version")
}

#[tauri::command]
fn install_mysql_docker() -> String {
    let pull_output = Command::new("docker").arg("pull").arg("mysql").output().unwrap_or_else(|e| {
        panic!("failed to execute process: {}", e)
    });

    let pull_output_str = str::from_utf8(&pull_output.stdout).unwrap();

    return pull_output_str.to_string();
    //if pull_output_str.contains("") {
     //   
    //}
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, check_docker])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
