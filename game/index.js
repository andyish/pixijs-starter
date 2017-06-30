'use strict';


var App = require('./src/app');


window.addEventListener('DOMContentLoaded', function() {

    console.clear();

    document.body.style.margin = 0;
    document.body.style.padding = 0;

    window.app = new App();

});
