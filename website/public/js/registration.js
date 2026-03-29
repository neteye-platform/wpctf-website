import init, { shell_execute_command, check_password, check_user } from "/js/zzc3IJDtB2kn5FMWa.js?url";

/**
 * This file exports and initializes the registration functions.
 * These functions can also be accessed directly from the Console of the Developer Tools (open it with F12 or Ctrl+Shift+I).
 */
init().then(() => {
    /**
     * The type returned by the check_password function.
     * @typedef {Object} check_password_result
     * @property {number} Match - Indicates a matching password.
     * @property {number} Wrong - Indicates a wrong password.
     * @property {number} PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE - Indicates a partial password.
     * @description This type defines the possible results of the check_password function.
     *
     *
     * Example:
     *
     * result = await window.check_password("MySecurePassword123");
     * switch (result) {
     *   case window.check_password_result.Match:
     *     console.log("Password is correct");
     *     break;
     *   case window.check_password_result.Wrong:
     *     console.log("Password is wrong");
     *     break;
     *   case window.check_password_result.PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE:
     *     console.log("Password is partial");
     *     break;
     * }
     *
     */
    window.check_password_result = {
        Match: 0,
        Wrong: 1,
        // ⚠️⚠️⚠️ This is a security problem and can lead to a brute force, do not use this functionality ⚠️⚠️⚠️
        PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE: 2,
        PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE: 2,
        PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE: 2,
        PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE: 2,
        PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE: 2,
        PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE: 2,
        PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE: 2,
        PASSWORD_IS_PARTIAL_DO_NOT_USE_THIS_FUNCTIONALITY_THIS_CAN_BE_A_SECURITY_PROBLEM_FOR_BRUTE_FORCE: 2
    }

    /**
     * This function validates the password.
     * If the password is correct, user will be logged in.
     * @param {string} password - The password to validate.
     * @returns {check_password_result} The result of the password validation.
     *
     *
     * Example:
     *
     * result = await window.check_password("MySecurePassword123");
     * console.log(result); // Outputs the result of password validation
     *
     */
    window.check_password = check_password

    /**
     * This function checks if the user is correct.
     * @param {string} user - The user to check.
     * @returns {check_user_result} The result of the user check.
     *
     *
     * Example:
     *
     * result = await window.check_user("john");
     * console.log(result); // Outputs the result of user check
     *
     */
    window.check_user = check_user

    /**
     * The type returned by the check_user function.
     * @typedef {Object} check_user_result
     * @property {number} Correct - Indicates a correct user.
     * @property {number} Wrong - Indicates a wrong user.
     * @description This type defines the possible results of the check_user function.
     *
     *
     * Example:
     *
     * result = await window.check_user("john");
     * switch (result) {
     *   case window.check_user_result.Correct:
     *     console.log("User is correct");
     *     break;
     *   case window.check_user_result.Wrong:
     *     console.log("User is wrong");
     *     break;
     * }
     *
     */
    window.check_user_result = {
        Correct: 0,
        Wrong: 1
    }

    /**
     * This function executes commands in the shell. Requires user to be logged in.
     * @param {string} command - The command to execute.
     * @param {string} argument - The argument for the command.
     * @returns {string} The result of the command execution.
     *
     *
     * Examples:
     *
     * result = await window.shell_execute_command("ls", "");
     * console.log(result); // Outputs the result of "ls" command
     *
     * result = await window.shell_execute_command("bash", "script.sh");
     * console.log(result); // Executes the script.sh file
     *
     */
    window.shell_execute_command = shell_execute_command
});
