type RegistrationChallengeWasmModule = {
  shell_execute_command: (command: string, argument: string) => string;
};

class RegistrationChallengeWrapper {
  private static _instance = new RegistrationChallengeWrapper();
  private wasmModule?: RegistrationChallengeWasmModule;
  public ready = false;

  private constructor() {
    this.initializeWasmModule();
  }

  private async initializeWasmModule(): Promise<void> {
    this.wasmModule = await import("registration-challenge");
    this.ready = true;
  }

  private getWasmModule(): RegistrationChallengeWasmModule {
    if (!this.wasmModule) {
      throw new Error("WebAssembly module is not yet initialized.");
    }
    return this.wasmModule;
  }

  public static get instance(): RegistrationChallengeWrapper {
    return this._instance;
  }

  public shell_execute_command(command: string, argument: string): string {
    return this.getWasmModule().shell_execute_command(command, argument);
  }
}

export const RegistrationChallengeService =
  RegistrationChallengeWrapper.instance;
