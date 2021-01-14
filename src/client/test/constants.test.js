const {localUrl} =  require('../js/constants');


describe("Constants", () => {
    test('Testing Local Vairalbe', () => {
        expect(localUrl).toBe("http://localhost:8080/");
    });
})
