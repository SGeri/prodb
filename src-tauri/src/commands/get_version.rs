use docker_api::Docker;
use crate::types::command_error::CommandError;

#[tauri::command]
pub async fn get_version() -> Result<Option<String>, CommandError> {
    let docker = Docker::new("tcp://127.0.0.1:2375")?;

    let res = docker.version().await?;

    Ok(res.version)
}