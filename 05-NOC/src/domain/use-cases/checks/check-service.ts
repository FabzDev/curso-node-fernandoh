interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

export class CheckService implements CheckServiceUseCase {

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url);
      if (req.ok) {
        throw Error(`Error making request to ${url}`);
      }
      console.log(`${url} responded with http status 200`);
      return true;
    } catch (error) {
      console.log(error);
    }
    return false;
  }
}
