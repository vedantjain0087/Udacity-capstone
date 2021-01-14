import {button} from './constants';
import { handleSubmit } from './formHandler';
let eventListener = document.addEventListener('DOMContentLoaded', function () {
    button.addEventListener('click', handleSubmit);
})

export {eventListener}