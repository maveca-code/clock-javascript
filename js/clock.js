'use strict';

window.addEventListener('load', () => {

    function interval() {
        var time = setInterval(() => {
            //Create span tag variables
            var hour = document.querySelector('#hour');
            var minutes = document.querySelector('#minutes');
            var second = document.querySelector('#second');

            //Create Date object
            var date = new Date();

            //Add to variables the method for hours, minutes and second
            //Show the result by adding two digits
            hour.innerHTML = ("0" + date.getHours()).slice(-2);
            minutes.innerHTML = ("0" + date.getMinutes()).slice(-2);
            second.innerHTML = ("0" + date.getSeconds()).slice(-2);
        }, 1000);
    }

    interval();
});