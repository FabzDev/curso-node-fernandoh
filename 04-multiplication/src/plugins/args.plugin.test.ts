const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const myYargs = await import("./args.plugin");
  return myYargs.argsPluging;
};

describe("Args Pluging Test", () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("temporal test", async () => {
    const myArgs = await runCommand(["-b", "5"]);
    expect(myArgs).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        n: "defaultTable",
        d: "outputs/",
        s: false,
      })
    );
  });

  test("temporal test 2", async () => {
    const myArgs = await runCommand(["-b", "4", "-l", "9", "-s"]);
    expect(myArgs).toEqual(
      expect.objectContaining({
        b: 4,
        l: 9,
        n: "defaultTable",
        d: "outputs/",
        s: true,
      })
    );
  });

});
