interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessRequest= () => void;
type ErrorRequest= (error: string) => void;


export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly successReq: SuccessRequest,
    private readonly errorReq: ErrorRequest,
  ){
  }

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (!req.ok) {
        throw Error(`Error making request to ${url}`);
      }
      this.successReq();
      return true;
    } catch (error) {
      this.errorReq(`${error}`)
      return false;
    }
  }
}
