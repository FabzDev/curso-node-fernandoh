import { httpClient } from "../../src/plugins/httpClient.plugin";

describe("httpClient.plugin.test.ts", () => {
	test("httpClient() returns data", async () => {
		const data = await httpClient.get("https://jsonplaceholder.typicode.com/todos/1");
		expect(data).toEqual({
			userId: 1,
			id: 1,
			title: "delectus aut autem",
			completed: expect.any(Boolean),
		});
	});

    test("httpClient() post, put and delete are functions", async() => {
        expect(typeof httpClient.post).toBe("function")
        expect(typeof httpClient.put).toBe("function")
        expect(typeof httpClient.delete).toBe("function")
    })
});
