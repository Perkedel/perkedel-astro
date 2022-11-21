use std::array;

use tauri::{
  WindowBuilder,
  CustomMenuItem, 
  Menu, 
  MenuItem, 
  Submenu,
  AboutMetadata
};
// use tauri::WindowBuilder;

#[cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

// https://tauri.app/v1/guides/getting-started/setup/integrate
#[tauri::command]
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}

#[tauri::command]
fn copyTheURL() -> String {
   format!("Hello, aaaaa")
}

fn main() {
  // https://stackoverflow.com/a/27841363/9079640
  const _APP_NAME:&str = "Perkedel ASTR";
  const _APP_ABOUT_META:&str = "cool and good";
  const _APP_VERSION:Option<&str> = option_env!("CARGO_PKG_VERSION");
  const _APP_AUTHORS:Vec<String> = Vec::new();
  _APP_AUTHORS.push("JOELwindows7".to_owned());
  const _APP_DESCRIPTION:Option<&str> = option_env!("CARGO_PKG_DESCRIPTION");
  const _APP_HOMEPAGE:Option<&str> = option_env!("CARGO_PKG_WEBSITE");
  const _APP_HOMEPAGE_LABEL:&str = "Same website online";
  const _APP_LICENSE:&str = "GNU AGPL v3";
  const _APP_COPYRIGHT:&str = "(c) Perkedel";

  // https://tauri.app/v1/guides/features/menu
  // here `"quit".to_string()` defines the menu item id, and the second parameter is the menu item label.
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");
  let close = CustomMenuItem::new("close".to_string(), "Close");
  let copy_url = CustomMenuItem::new("copyURL".to_string(), "Copy URL");
  let about_goto = CustomMenuItem::new("aboutGoto".to_string(), "About (page)");
  let help_goto = CustomMenuItem::new("helpGoto".to_string(), "Help (page)");
  let submenu = Submenu::new("File", Menu::new()
    .add_item(quit)
    // .add_item(close)
    .add_item(copy_url)
    );
  let submenu_help = Submenu::new("Help",Menu::new()
    .add_native_item(MenuItem::About(_APP_NAME.to_owned(),AboutMetadata::new()
      .version(_APP_VERSION.unwrap_or("???"))
      .authors(_APP_AUTHORS)
      .website(_APP_HOMEPAGE.unwrap_or("https://perkedel.netlify.app"))
      .website_label(_APP_HOMEPAGE_LABEL)
      .license(_APP_LICENSE)
      .copyright(_APP_COPYRIGHT)
      .comments(_APP_DESCRIPTION.unwrap_or("???"))
    ))
    .add_item(help_goto)
    .add_item(about_goto)
    );
  let menu = Menu::new()
    .add_submenu(submenu)
    // .add_native_item(MenuItem::Copy)
    // .add_item(CustomMenuItem::new("hide", "Hide"))
    .add_submenu(submenu_help)
    ;
  // let menu = Menu::new(); // configure the menu
  tauri::Builder::default()
    .setup(|app| {
      // https://tauri.app/blog/2022/09/19/tauri-egui-0-1/
      // app.wry_plugin(tauri_egui::EguiPluginBuilder::new(app.handle()));

      // https://tauri.app/v1/guides/features/menu
      // let window = WindowBuilder::new(
      //   app,
      //   "main-window".to_string(),
      //   tauri::WindowUrl::App("index.html".into()),
      // )
      // .menu(menu)
      // .build()?;
      // let window_ = window.clone();
      // window.on_menu_event(move |event| {
      //   match event.menu_item_id() {
      //     "quit" => {
      //       std::process::exit(0);
      //     }
      //     "close" => {
      //       window_.close().unwrap();
      //     }
      //     _ => {}
      //   }
      // });
      Ok(())
    })
    .invoke_handler(tauri::generate_handler![greet])
    .menu(menu)
    .on_menu_event(|event| {
      match event.menu_item_id() {
        "quit" => {
          std::process::exit(0);
        }
        "close" => {
          event.window().close().unwrap();
        }
        "copyURL"=>{

        }
        _ => {}
      }
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
