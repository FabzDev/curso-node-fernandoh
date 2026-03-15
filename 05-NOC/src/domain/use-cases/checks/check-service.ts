interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type OnLogSuccess = () => void;
type OnLogError = (errorMessage: string) => void;

export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly onLogSuccess: OnLogSuccess,
    private readonly onLogError: OnLogError,
  ) {}

  async execute(url: string): Promise<boolean> {
    const resp = await fetch(url);
    try {
      if (!resp.ok) {
        throw new Error('"Fetch call failed!!!"');
      }
      this.onLogSuccess();
      return true;
    } catch (error) {
      this.onLogError(`Error: ${error}`);
      return false;
    }
  }
}
