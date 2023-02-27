use docker_api::{Docker, models::ImageSummary};
use crate::types::command_error::CommandError;

#[tauri::command]
pub async fn get_images() -> Result<Vec<ImageSummary>, CommandError> {
    let docker = Docker::new("tcp://127.0.0.1:2375")?;

    match docker.images().list(&Default::default()).await {
        Ok(images) => Ok(images),
        Err(e) => Err(CommandError::DockerError(e))
    }
}