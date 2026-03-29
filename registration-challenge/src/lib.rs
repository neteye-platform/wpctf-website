use obscure_string::*;
use wasm_bindgen::prelude::*;
use std::time::Duration;

const EXECUTABLE_FILE: &str = "register.sh";

// This is the registration FORM_WEBSITE_ID as an obscure string
// in order to avoid to spot it directly in the compiled binary with the strings command
obscure_string!(FORM_WEBSITE_ID = "FjAfg30zDTg7KeMd5blTyifvK2GeX0IB5lLPeIGSWqs");

// This is the registration FORM_HOSTNAME  as an obscure string
// in order to avoid to spot it directly in the compiled binary with the strings command
obscure_string!(FORM_HOSTNAME = "44cba5f8ec554730aec68071c93050b6.svc.dynamics.com");

// This is the registration FORM_BLOCK_ID as an obscure string
// in order to avoid to spot it directly in the compiled binary with the strings command
obscure_string!(FORM_BLOCK_ID = "4221c94f-5af3-ee11-904b-000d3ab8c619");

// This is the password as an obscure string
// in order to avoid to spot it directly in the compiled binary with the strings command
obscure_string!(PASSWORD = "Keu0Rea5uU0DIXK179rmJWac6ILfVPivXF8kU3oQiOV");

const FORM_HTML: &str = "solved:<div class='form-container'>
  <div class='d365-mkt-config' style='display:none' data-website-id='FORM_WEBSITE_ID' data-hostname='FORM_HOSTNAME'> </div>
  <div data-form-block-id='FORM_BLOCK_ID'></div>
</div>";

#[wasm_bindgen]
#[derive(PartialEq, Debug)]
pub enum CheckPasswordResult {
    Match,
    Wrong,
    PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE
}

#[wasm_bindgen]
#[derive(PartialEq, Debug)]
pub enum CheckUserResult {
    Correct,
    Wrong
}

static mut LOGGED_IN: bool = false;

#[wasm_bindgen]
pub fn shell_execute_command(command: String, argument: String) -> String {
    if is_logged_in() {
        match command.as_str() {
            "ls" => execute_ls(&argument),
            "sh" => execute_shell_file("sh", &argument),
            "bash" => execute_shell_file("bash", &argument),
            "wpsh" => execute_shell_file("wpsh", &argument),
            "./register.sh" => execute_shell_file("sh", &EXECUTABLE_FILE),
            "register.sh" => execute_shell_file("sh", &EXECUTABLE_FILE),
            command => {
                format!("{command}: command not found")
            }
        }
    } else {
        "You must be logged in".to_string()
    }
}

#[wasm_bindgen]
pub async fn check_password(password_from_user: String) -> CheckPasswordResult {
    let password = PASSWORD.as_string();
    if password == password_from_user {
        login();
        return CheckPasswordResult::Match;
    }

    if password.as_str().starts_with(&password_from_user) {
        return CheckPasswordResult::PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE;
    }

    CheckPasswordResult::Wrong
}

#[wasm_bindgen]
pub async fn check_user(user: String) -> CheckUserResult {
    if user.to_lowercase() == "elliot" {
        return CheckUserResult::Correct;
    }

    CheckUserResult::Wrong
}

fn is_logged_in() -> bool {
    // SAFETY: WASM is a single threaded runtime and this value will only ever be accessed sequentially.
    unsafe { LOGGED_IN }
}
fn login() {
    // SAFETY: WASM is a single threaded runtime and this value will only ever be accessed sequentially.
    unsafe { LOGGED_IN = true}
}

fn execute_ls(argument: &str) -> String {
    // Blocks any option
    if is_argument_option(argument) {
        return format!(
            "ls: invalid option '{argument}' when the first argument starts with a '-'"
        );
    }

    // Return the only file
    if argument == EXECUTABLE_FILE || argument == "" {
        return String::from(EXECUTABLE_FILE);
    }

    format!("ls: cannot access '{argument}': No such file or directory")
}

fn execute_shell_file(shell: &str, argument: &str) -> String {
    // Blocks any option
    if is_argument_option(argument) {
        return format!(
            "{shell}: invalid option '{argument}' when the first argument starts with a '-'"
        );
    }

    if argument != EXECUTABLE_FILE {
        return format!("{shell}: {argument}: No such file or directory");
    }

    let form_website_id = FORM_WEBSITE_ID.as_string();
    let form_hostname = FORM_HOSTNAME.as_string();
    let form_block_id = FORM_BLOCK_ID.as_string();
    FORM_HTML
        .replace("FORM_WEBSITE_ID", &form_website_id)
        .replace("FORM_HOSTNAME", &form_hostname)
        .replace("FORM_BLOCK_ID", &form_block_id)
}

fn is_argument_option(argument: &str) -> bool {
    argument.starts_with('-')
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn test_is_argument_option() {
        assert_eq!(is_argument_option("-a"), true);
        assert_eq!(is_argument_option("--help"), true);
        assert_eq!(is_argument_option("ok"), false);
    }

    #[test]
    fn test_execute_ls() {
        assert_eq!(
            execute_ls("-a"),
            "ls: invalid option '-a' when the first argument starts with a '-'"
        );
        assert_eq!(execute_ls(""), EXECUTABLE_FILE);
        assert_eq!(execute_ls(EXECUTABLE_FILE), EXECUTABLE_FILE);
        assert_eq!(
            execute_ls("other_file"),
            "ls: cannot access 'other_file': No such file or directory"
        );
    }

    #[test]
    fn test_execute_shell_file() {
        assert_eq!(
            execute_shell_file("sh", "-c"),
            "sh: invalid option '-c' when the first argument starts with a '-'"
        );

        assert_eq!(
            execute_shell_file("bash", "not_exists"),
            "bash: not_exists: No such file or directory"
        );

        let form_website_id = FORM_WEBSITE_ID.as_string();
        let form_hostname = FORM_HOSTNAME.as_string();
        let form_block_id = FORM_BLOCK_ID.as_string();
        let form_html = FORM_HTML
            .replace("FORM_WEBSITE_ID", &form_website_id)
            .replace("FORM_HOSTNAME", &form_hostname)
            .replace("FORM_BLOCK_ID", &form_block_id);
        assert_eq!(execute_shell_file("wpsh", EXECUTABLE_FILE), form_html);
    }

    #[async_std::test]
    async fn test_check_password() {
        assert_eq!(
            check_password("wrong password".to_string()).await,
            CheckPasswordResult::Wrong
        );

        let correct_password = PASSWORD.as_string();
        assert_eq!(check_password(correct_password).await, CheckPasswordResult::Match);

        let correct_password = PASSWORD.as_string();
        assert_eq!(
            check_password(String::from(correct_password.chars().nth(0).unwrap())).await,
            CheckPasswordResult::PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE
        );
    }

    #[test]
    fn test_shell_execute_command() {
        assert_eq!(
            shell_execute_command("ls".to_string(), "".to_string()),
            "You must be logged in"
        );

        login();
        assert_eq!(
            shell_execute_command("ls".to_string(), "".to_string()),
            EXECUTABLE_FILE
        );
        assert_eq!(
            shell_execute_command("ls".to_string(), "not exists".to_string()),
            "ls: cannot access 'not exists': No such file or directory"
        );
        assert_eq!(
            shell_execute_command("cat".to_string(), "not exists".to_string()),
            "cat: command not found"
        );
        assert_eq!(
            shell_execute_command("sh".to_string(), "not exists".to_string()),
            "sh: not exists: No such file or directory"
        );
        assert_eq!(
            shell_execute_command("bash".to_string(), "not exists".to_string()),
            "bash: not exists: No such file or directory"
        );
        assert_eq!(
            shell_execute_command("wpsh".to_string(), "not exists".to_string()),
            "wpsh: not exists: No such file or directory"
        );
        assert_eq!(shell_execute_command("wpsh".to_string(), EXECUTABLE_FILE.to_string()), "solved:<div class='form-container'>\n  <div class='d365-mkt-config' style='display:none' data-website-id='FjAfg30zDTg7KeMd5blTyifvK2GeX0IB5lLPeIGSWqs' data-hostname='44cba5f8ec554730aec68071c93050b6.svc.dynamics.com'> </div>\n  <div data-form-block-id='4221c94f-5af3-ee11-904b-000d3ab8c619'></div>\n</div>");
        assert_eq!(shell_execute_command("register.sh".to_string(), "".to_string()), "solved:<div class='form-container'>\n  <div class='d365-mkt-config' style='display:none' data-website-id='FjAfg30zDTg7KeMd5blTyifvK2GeX0IB5lLPeIGSWqs' data-hostname='44cba5f8ec554730aec68071c93050b6.svc.dynamics.com'> </div>\n  <div data-form-block-id='4221c94f-5af3-ee11-904b-000d3ab8c619'></div>\n</div>");
        assert_eq!(shell_execute_command("./register.sh".to_string(), "".to_string()), "solved:<div class='form-container'>\n  <div class='d365-mkt-config' style='display:none' data-website-id='FjAfg30zDTg7KeMd5blTyifvK2GeX0IB5lLPeIGSWqs' data-hostname='44cba5f8ec554730aec68071c93050b6.svc.dynamics.com'> </div>\n  <div data-form-block-id='4221c94f-5af3-ee11-904b-000d3ab8c619'></div>\n</div>");
    }

    #[test]
    fn test_registration_form_ids_are_not_clear_in_compiled_binary() {
        assert!(!FORM_WEBSITE_ID.0.is_ascii());
        assert!(!FORM_HOSTNAME.0.is_ascii());
        assert!(!FORM_BLOCK_ID.0.is_ascii());
        assert!(!PASSWORD.0.is_ascii());
    }

    #[test]
    fn test_registration_form_ids_contains_right_content() {
        assert_eq!(
            &FORM_WEBSITE_ID.as_string(),
            "FjAfg30zDTg7KeMd5blTyifvK2GeX0IB5lLPeIGSWqs"
        );
        assert_eq!(
            &FORM_HOSTNAME.as_string(),
            "44cba5f8ec554730aec68071c93050b6.svc.dynamics.com"
        );
        assert_eq!(
            &FORM_BLOCK_ID.as_string(),
            "4221c94f-5af3-ee11-904b-000d3ab8c619"
        );
        assert_eq!(&PASSWORD.as_string(), "Keu0Rea5uU0DIXK179rmJWac6ILfVPivXF8kU3oQiOV");
    }

    #[async_std::test]
    async fn test_check_user() {
        assert_eq!(
            check_user("wrong".to_string()).await,
            CheckUserResult::Wrong
        );

        assert_eq!(
            check_user("elliot".to_string()).await,
            CheckUserResult::Correct
        );

        assert_eq!(
            check_user("ELLIOT".to_string()).await,
            CheckUserResult::Correct
        );

        assert_eq!(
            check_user("Elliot".to_string()).await,
            CheckUserResult::Correct
        );
    }
}
