let html = document.documentElement;
let toggler = document.querySelector('.switch .input');
function toogle() {
    if (toggler.checked) {
        html.setAttribute('data-bs-theme', 'dark');
    } else {
        html.setAttribute('data-bs-theme', 'light');
    }
}
toggler.addEventListener('change', toogle)

