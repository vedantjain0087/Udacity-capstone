import "babel-polyfill"
const {postData} =  require('../js/postData');

describe("postData", () => {
    test('Testing API', () => {
        function callback(data) {
            try {
              expect(data).toBe('peanut butter');
              done();
            } catch (error) {
              done(error);
            }
          }
          postData(callback);
    });
})
