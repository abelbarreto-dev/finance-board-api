import {BaseException} from "@Exceptions/BaseException";
import {HttpUtil} from "@Utils/HttpUtil";
import {makeResponse} from "../Mocks/General/Response.mock";

describe("HttpUtil Success Responses", () => {
    interface TestDTO {
        test: string;
    }

    test("TestDTO Response", async () => {
        const testDTO: TestDTO = {
            test: "test"
        };

        const response = makeResponse();
        const status = 200;

        await HttpUtil.successResponse<TestDTO>(response, testDTO, status);

        expect(response.status).toHaveBeenCalledWith(status);
        expect(response.json).toHaveBeenCalledWith(testDTO);
    });
});

describe("HttpUtil Exceptions Responses", () => {
    const baseException = new BaseException("base exception test");
    const anotherException = new Error("another exception test");

    test("Base Exception Response", async () => {
        const response = makeResponse();

        await HttpUtil.exceptionResponse(baseException, response);

        expect(response.status).toHaveBeenCalledWith(baseException.code);
        expect(response.json).toHaveBeenCalledWith({message: baseException.message});
    });

    test("Generic Another Exception Response", async () => {
        const response = makeResponse();

        await HttpUtil.exceptionResponse(anotherException, response);

        expect(response.status).toHaveBeenCalledWith(500);
        expect(response.json).toHaveBeenCalledWith({message: "Internal server error"});
    });
});
