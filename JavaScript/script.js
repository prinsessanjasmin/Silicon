const collapseDown = document.getElementsByClassName('collapse-down'); 
const collapsible = document.getElementsByClassName('collapsible');
const faq = document.getElementsByClassName('faq');

const darkmodeSwitch = document.getElementById('dm-switch'); 
const hasSetDarkmode = localStorage.getItem('darkmode');

//I had help from ChatGPT with this event listener, specifically the loop
for (let i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener('click', function() {
        const faq = this.parentElement; // Access the parent element (the div with the class 'faq')

        if (faq.classList.contains('faq-open')) {
            removeOpenClass(faq);
        } else {
            addOpenClass(faq);
        }
    });
}

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

function addOpenClass(faq) {
    faq.classList.add('faq-open');
}

function removeOpenClass(faq) {
    faq.classList.remove('faq-open')
}

function enableDarkmode() {
    darkmodeSwitch.checked = true;
    document.documentElement.classList.add('darkmode');
}

function disableDarkmode () {
    darkmodeSwitch.checked = false;
    document.documentElement.classList.remove('darkmode');
}

