const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const myYargs = await import("./args.plugin");
  return myYargs.argsPluging;
};

describe("Args Pluging Test", () => {

  test("temporal test", async () => {
    const myArgs = await runCommand(["-b", "5"]);

    expect(myArgs).toEqual(expect.objectContaining({
        b: 5,
        l: 10,
        n: "defaultTable",
        d: "outputs/",
        s: false,
      })
    );
  });
});
