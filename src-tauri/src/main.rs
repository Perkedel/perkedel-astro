use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
use tauri::WindowBuilder;

// https://tauri.app/v1/guides/features/menu
// here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
let quit = CustomMenuItem::new("quit".to_string(), "Quit");
let close = CustomMenuItem::new("close".to_string(), "Close");
let submenu = Submenu::new("File", Menu::new().add_item(quit).add_item(close));
let menu = Menu::new()
  .add_native_item(MenuItem::Copy)
  .add_item(CustomMenuItem::new("hide", "Hide"))
  .add_submenu(submenu);

#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

// https://tauri.app/v1/guides/getting-started/setup/integrate
#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}

fn main() {
  let menu = Menu::new(); // configure the menu
  tauri::Builder::default()
    .setup(|app| {
      // https://tauri.app/blog/2022/09/19/tauri-egui-0-1/
      app.wry_plugin(tauri_egui::EguiPluginBuilder::new(app.handle()));

      // https://tauri.app/v1/guides/features/menu
      let window = WindowBuilder::new(
        app,
        "main-window".to_string(),
        tauri::WindowUrl::App("index.html".into()),
      )
      .menu(menu)
      .build()?;
      let window_ = window.clone();
      window.on_menu_event(move |event| {
        match event.menu_item_id() {
          "quit" => {
            std::process::exit(0);
          }
          "close" => {
            window_.close().unwrap();
          }
          _ => {}
        }
      });
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![greet])
    // .menu(menu)
    // .on_menu_event(|event| {
    //   match event.menu_item_id() {
    //     "quit" => {
    //       std::process::exit(0);
    //     }
    //     "close" => {
    //       event.window().close().unwrap();
    //     }
    //     _ => {}
    //   }
    // })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
