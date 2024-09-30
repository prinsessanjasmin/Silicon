const collapseDown = document.getElementsByClassName('collapse-down'); 


const darkmodeSwitch = document.getElementById('dm-switch'); 
const hasSetDarkmode = localStorage.getItem('darkmode');


if(hasSetDarkmode == null) {
    if(window.matchMedia('prefers-color-scheme: dark)').matches) {
        enableDarkmode();
    } else {
        disableDarkmode();
    }    
} else if (hasSetDarkmode === 'on') {
    enableDarkmode();
} else if (hasSetDarkmode === 'off') {
    disableDarkmode();
}

darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        document.documentElement.classList.add('darkmode');
        localStorage.setItem('darkmode', 'on');
    } 
    else {
        document.documentElement.classList.remove('darkmode');
        localStorage.setItem('darkmode', 'off');
    }
})

function enableDarkmode() {
    darkmodeSwitch.checked = true;
    document.documentElement.classList.add('darkmode');
}

function disableDarkmode () {
    darkmodeSwitch.checked = false;
    document.documentElement.classList.remove('darkmode');
}

