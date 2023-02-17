#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// sleep: std::thread::sleep(std::time::Duration::from_millis(4000));

use std::env;
use docker_api::Docker;

enum CommandError {
    DockerError(docker_api::Error)
}

impl serde::Serialize for CommandError {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
  where S: serde::ser::Serializer, {
    serializer.serialize_str(self.to_string().as_ref())
  }
}

impl std::convert::From<docker_api::Error> for CommandError {
    fn from(error: docker_api::Error) -> Self {
        CommandError::DockerError(error)
    }
}

impl std::fmt::Display for CommandError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            CommandError::DockerError(e) => write!(f, "Docker error: {}", e),
        }
    }
}

#[tauri::command]
async fn check_docker() -> Result<Option<String>, CommandError> {
    let docker = Docker::new("tcp://127.0.0.1:2375")?;

    let res = docker.version().await?;

    Ok(res.version)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![check_docker])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
