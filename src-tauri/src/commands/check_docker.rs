use docker_api::Docker;
use crate::types::command_error::CommandError;

#[tauri::command]
pub async fn check_docker() -> Result<Option<String>, CommandError> {
    let docker = Docker::new("tcp://127.0.0.1:2375")?;

    let res = docker.version().await?;

    Ok(res.version)
}