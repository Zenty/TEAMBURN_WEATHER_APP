function getTheme() {
    return localStorage.getItem('theme') || 'cold';
}
function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
}


function rotateTheme(theme) {
    if (theme === 'cold') {
        return 'warm'
    }
    return 'cold';
}

const themeDisplay = document.getElementById('theme');
const themeToggler = document.getElementById('theme-toggle');
const sliderText = document.getElementById('slider-text');

let theme = getTheme();
applyTheme(theme);
themeDisplay.innerText = `Current theme: ${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
sliderText.setAttribute('data-hover-text', `Switch to ${rotateTheme(theme).charAt(0).toUpperCase() + rotateTheme(theme).slice(1)} Theme`);

themeToggler.checked = theme === 'warm';

themeToggler.onclick = () => {
    const newTheme = rotateTheme(theme);
    applyTheme(newTheme);
    themeDisplay.innerText = `Current theme: ${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)}`;
    sliderText.setAttribute('data-hover-text', `Switch to ${rotateTheme(newTheme).charAt(0).toUpperCase() + rotateTheme(newTheme).slice(1)} Theme`)
    saveTheme(newTheme);

    theme = newTheme;
}