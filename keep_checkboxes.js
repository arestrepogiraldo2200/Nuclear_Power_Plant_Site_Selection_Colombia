// Code to save checkbox values on localStorage

function save() {

    checkboxes = document.querySelectorAll('input[type=checkbox]');

    for (let i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value,checkboxes[i].checked);
    }    
}

function load() {

    checkboxes = document.querySelectorAll('input[type=checkbox]');

    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true : false;
    }  
}

export {save, load};
