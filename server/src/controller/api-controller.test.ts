import getApi from "./api-controller";

describe("Api-controller", () => {
    test("Api-controller getApi() should return right message ", () => {
        let expectedMessage: Object = "Esta é uma Mensagem de teste a mensagem é: HEHE XD";
        let message = getApi("Mensagem de teste", "HEHE XD")

        expect(message).toBe(expectedMessage)
    });
});