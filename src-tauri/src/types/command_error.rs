pub enum CommandError {
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