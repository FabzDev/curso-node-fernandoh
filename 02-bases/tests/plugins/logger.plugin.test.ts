import { buildLogger, logger as winstorLogger } from "../../src/plugins/logger.plugin";

describe("logger.plugin.test.ts", () => {
	const testingService = "test service";

	test("buildLogger() returns a function", () => {
		const testingBuildLogger = buildLogger(testingService);

		expect(typeof testingBuildLogger.log).toBe("function");
		expect(typeof testingBuildLogger.error).toBe("function");
	});

	test("Logger() is called", () => {
		const testingMessage = "test message";
		const testingLogger = buildLogger(testingService);

		const loggerMock = jest.spyOn(winstorLogger, "log");

		testingLogger.log(testingMessage);

		expect(loggerMock).toHaveBeenCalledWith(
			"info",
			expect.objectContaining({
				level: "info",
				service: testingService,
				message: testingMessage,
			})
		);
	});
});
