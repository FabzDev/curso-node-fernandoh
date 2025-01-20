import { CreateTable } from "./create-table.use-case";

describe("CreateTableUseCase", () => {
  
    test("should create a createTable instance", () => {
    const createTableInstanse = new CreateTable();
    const table = createTableInstanse.execute({ base: 2 });
    const rows = table.split("\n").length;
    expect( createTableInstanse ).toBeInstanceOf(CreateTable);
    expect( table ).toContain("2 x 1 = 2");
    expect( table ).toContain("2 x 10 = 20");
    expect( rows ).toBe(10+6);
  });

  test("should create a CreateTable with both base and limit", () => {
    const options = { base: 3, limit: 20 }
    const { limit: limit } = options
    const table = new CreateTable().execute( options );
    const rows = table.split("\n").length;
    expect( table ).toContain("")
    expect( table ).toContain("3 x 1 = 3");
    expect( table ).toContain("3 x 15 = 45");
    expect( rows ).toBe(limit+6);
  });

});
