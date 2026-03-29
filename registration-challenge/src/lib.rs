use glob::Pattern;
use obscure_string::*;
use wasm_bindgen::prelude::*;

const FILES: &[&str] = &[
    "abag.txt",
    "blag.txt",
    "fake.txt",
    "flag.txt",
    "flare.txt",
    "flat.txt",
    "flood.txt",
    "flug.txt",
    "fullbag.txt",
    "nolag.txt",
    "plug.txt",
];

// This is the registration FORM_WEBSITE_ID as an obscure string
// in order to avoid to spot it directly in the compiled binary with the strings command
obscure_string!(FORM_WEBSITE_ID = "1Wna7z1Qt4t4PKzi3_fDLAkJ-IJd9F-aU0TyDR2LLZk");

// This is the registration FORM_HOSTNAME  as an obscure string
// in order to avoid to spot it directly in the compiled binary with the strings command
obscure_string!(FORM_HOSTNAME = "44cba5f8ec554730aec68071c93050b6.svc.dynamics.com");

// This is the registration FORM_BLOCK_ID as an obscure string
// in order to avoid to spot it directly in the compiled binary with the strings command
obscure_string!(FORM_BLOCK_ID = "6bc4a071-1759-ee11-be6f-0022489d0546");

const FORM_HTML: &str = "solved:<div class='form-container'>
  <div class='d365-mkt-config' style='display:none' data-website-id='FORM_WEBSITE_ID' data-hostname='FORM_HOSTNAME'> </div>
  <div data-form-block-id='FORM_BLOCK_ID'></div>
</div>";

#[wasm_bindgen]
pub fn shell_execute_command(command: String, argument: String) -> String {
    // Check if arguments contains the flag string
    if contains_flag(&argument) {
        return "command aborted: security policy violation. String 'flag' detected".to_string();
    }

    match command.as_str() {
        "ls" => execute_ls(&argument),
        "cat" => execute_cat(),
        "single-cat" => execute_single_cat(&argument),
        command => {
            format!("{command}: command not found")
        }
    }
}

fn execute_ls(argument: &str) -> String {
    // Blocks any option
    if is_argument_option(argument) {
        return format!(
            "ls: invalid option '{argument}' when the first argument starts with a '-'"
        );
    }

    // Get matched files
    let matches = get_matches_files(argument);

    matches.join(" ").to_string()
}

fn execute_cat() -> String {
    "cat: not supported. Please use single-cat".to_string()
}

fn execute_single_cat(argument: &str) -> String {
    // Blocks any option
    if is_argument_option(argument) {
        return format!(
            "single-cat: invalid option '{argument}' when the first argument starts with a '-'"
        );
    }

    // Get matched files
    let matches = get_matches_files(argument);

    if matches.is_empty() {
        return "single-cat: no files found".to_string();
    }

    if matches.len() > 1 {
        return "single-cat: can cat only one file at a time".to_string();
    }

    get_file_content(matches[0])
}

fn contains_flag(argument: &str) -> bool {
    argument.contains("flag")
}

fn is_argument_option(argument: &str) -> bool {
    argument.starts_with('-')
}

fn get_matches_files(argument: &str) -> Vec<&'static str> {
    if argument.is_empty() {
        return FILES.to_vec();
    }

    let pattern = Pattern::new(argument).unwrap();
    FILES
        .iter()
        .copied()
        .filter(|filename| pattern.matches(filename))
        .collect()
}

fn get_file_content(file: &str) -> String {
    if file == "flag.txt" {
        let form_website_id = FORM_WEBSITE_ID.as_string();
        let form_hostname = FORM_HOSTNAME.as_string();
        let form_block_id = FORM_BLOCK_ID.as_string();
        FORM_HTML
            .replace("FORM_WEBSITE_ID", &form_website_id)
            .replace("FORM_HOSTNAME", &form_hostname)
            .replace("FORM_BLOCK_ID", &form_block_id)
    } else {
        "Not the correct file. Try catting the flag ;)".to_string()
    }
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
    fn test_contains_flag() {
        assert_eq!(contains_flag("flag"), true);
        assert_eq!(contains_flag("a_flag_a"), true);
        assert_eq!(contains_flag("fla_g"), false);
        assert_eq!(contains_flag("fla_g flag"), true);
        assert_eq!(contains_flag("f l a g"), false);
    }

    #[test]
    fn test_execute_ls() {
        assert_eq!(
            execute_ls("-a"),
            "ls: invalid option '-a' when the first argument starts with a '-'"
        );
        assert_eq!(execute_ls(""), FILES.join(" "));
        assert_eq!(execute_ls("f*ag.txt"), "flag.txt fullbag.txt");
        assert_eq!(execute_ls("not_existing.txt"), "");
        assert_eq!(execute_ls("flag.txt"), "flag.txt");
        assert_eq!(execute_ls("f?ag.txt"), "flag.txt");
    }

    #[test]
    fn test_execute_cat() {
        assert_eq!(execute_cat(), "cat: not supported. Please use single-cat");
    }

    #[test]
    fn test_execute_single_cat() {
        assert_eq!(
            execute_single_cat("-a"),
            "single-cat: invalid option '-a' when the first argument starts with a '-'"
        );
        assert_eq!(
            execute_single_cat(""),
            "single-cat: can cat only one file at a time"
        );
        assert_eq!(
            execute_single_cat("f*ag.txt"),
            "single-cat: can cat only one file at a time"
        );
        assert_eq!(
            execute_single_cat("fullbag.txt"),
            "Not the correct file. Try catting the flag ;)"
        );
        assert_eq!(
            execute_single_cat("flag.txt"),
            "solved:<div class='form-container'>\n  <div class='d365-mkt-config' style='display:none' data-website-id='1Wna7z1Qt4t4PKzi3_fDLAkJ-IJd9F-aU0TyDR2LLZk' data-hostname='44cba5f8ec554730aec68071c93050b6.svc.dynamics.com'> </div>\n  <div data-form-block-id='6bc4a071-1759-ee11-be6f-0022489d0546'></div>\n</div>"
        );
    }

    #[test]
    fn test_shell_execute_command() {
        assert_eq!(
            shell_execute_command("ls".to_string(), "".to_string()),
            FILES.join(" ").to_string()
        );
        assert_eq!(
            shell_execute_command("ls".to_string(), "f*ag.txt".to_string()),
            "flag.txt fullbag.txt".to_string()
        );
        assert_eq!(
            shell_execute_command("ls".to_string(), "not_existing.txt".to_string()),
            "".to_string()
        );
        assert_eq!(
            shell_execute_command("ls".to_string(), "flag.txt".to_string()),
            "command aborted: security policy violation. String 'flag' detected".to_string()
        );

        assert_eq!(
            shell_execute_command("cat".to_string(), "flag.txt".to_string()),
            "command aborted: security policy violation. String 'flag' detected".to_string()
        );
        assert_eq!(
            shell_execute_command("cat".to_string(), "flug.txt".to_string()),
            "cat: not supported. Please use single-cat".to_string()
        );

        assert_eq!(
            shell_execute_command("single-cat".to_string(), "flag.txt".to_string()),
            "command aborted: security policy violation. String 'flag' detected".to_string()
        );
        assert_eq!(
            shell_execute_command("single-cat".to_string(), "f*ag.txt".to_string()),
            "single-cat: can cat only one file at a time".to_string()
        );
        assert_eq!(
            shell_execute_command("single-cat".to_string(), "fullbag.txt".to_string()),
            "Not the correct file. Try catting the flag ;)".to_string()
        );
        assert_eq!(
            shell_execute_command("single-cat".to_string(), "f?ag.txt".to_string()),
            "solved:<div class='form-container'>\n  <div class='d365-mkt-config' style='display:none' data-website-id='1Wna7z1Qt4t4PKzi3_fDLAkJ-IJd9F-aU0TyDR2LLZk' data-hostname='44cba5f8ec554730aec68071c93050b6.svc.dynamics.com'> </div>\n  <div data-form-block-id='6bc4a071-1759-ee11-be6f-0022489d0546'></div>\n</div>".to_string()
        );
    }

    #[test]
    fn test_registration_form_ids_are_not_clear_in_compiled_binary() {
        assert!(!FORM_WEBSITE_ID.0.is_ascii());
        assert!(!FORM_HOSTNAME.0.is_ascii());
        assert!(!FORM_BLOCK_ID.0.is_ascii());
    }

    #[test]
    fn test_registration_form_ids_contains_right_content() {
        assert_eq!(
            &FORM_WEBSITE_ID.as_string(),
            "1Wna7z1Qt4t4PKzi3_fDLAkJ-IJd9F-aU0TyDR2LLZk"
        );
        assert_eq!(
            &FORM_HOSTNAME.as_string(),
            "44cba5f8ec554730aec68071c93050b6.svc.dynamics.com"
        );
        assert_eq!(
            &FORM_BLOCK_ID.as_string(),
            "6bc4a071-1759-ee11-be6f-0022489d0546"
        );
    }
}
