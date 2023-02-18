## Adding a internal new command

1. Add command with snake casing in `commands/name.rs`
2. Use the [tauri::command] macro to expose the command to the frontend
3. Add the command's file to the `commands` module in `main.rs`
4. Add it to the commands array in `main.rs`
5. Use the frontend `@tauri-apps/api` to call the command using `invoke()`
