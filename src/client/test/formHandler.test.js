/**
 * @jest-environment jsdom
 */

describe("handleSubmit", () => {
    test('Testing Local Vairalbe', () => {
        const event = {
            preventDefault: jest.fn()
        }
        document.body.innerHTML = `
        <input class="form-container__form--form-field" id="url" type="text" name="url" value="" placeholder="Enter Url">
        <section class="results-wrapper">
        <div class="results-wrapper__loader" id="loader">Loading Please wait....</div>
        <div class="results-wrapper__results" id="results">
            <h3>Form Results:</h3>
            <div>
                <strong><u>Polarity:</u> </strong><span id="polarity"></span>
            </div>
            <div>
                <strong><u>Polarity Confidence:</u> </strong><span id="polarity_confidence"></span>
            </div>
            <div>
                <strong><u>Subjectivity:</u> </strong>
                <span id="subjectivity"></span>
            </div>
            <div>
                <strong><u>Subjectivity Confidence:</u> </strong>
                <span id="subjectivity_confidence"></span>
            </div>
            <div>
                <strong><u>Text:</u> </strong>
                <span id="text"></span>
            </div>
        </div>
    </section>
        `;
        const polarity = document.getElementById('polarity');
        const polarity_confidence = document.getElementById('polarity_confidence');
        const subjectivity = document.getElementById('subjectivity');
        const subjectivity_confidence = document.getElementById('subjectivity_confidence');
        const text = document.getElementById('text');
        const loader = document.getElementById('loader');
        const results = document.getElementById('results');
        const {handleSubmit} =  require('../js/formHandler');
        expect(loader.innerHTML).toBe('Loading Please wait....');
    });
})
