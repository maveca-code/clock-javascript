'use strict';

window.addEventListener('load', () => {

    const storage = window.localStorage;
    
    /*Element DOM */
    const check = document.querySelector('.toggle');
    const body = document.querySelector('.body');

    let dark = Boolean(storage.getItem('dark'));

    const checkDark = dark => {
        if(dark){
            body.classList.add('change-color');
            check.checked = true;
        }else{
            body.classList.remove('change-color');
            check.checked = false;
        }
    }

    checkDark(dark);

    check.addEventListener('click', function(){
        if(this.checked){
            body.classList.add('change-color');
            storage.setItem('dark', true);
        }else{
            body.classList.remove('change-color');
            storage.removeItem('dark');
        }
    });
});