var slider = document.querySelectorAll("input");
var cssSelector = document.querySelector(':root');

function eventHandler() {
    var suffix = (this.name != 'color') ? 'rem' : '';
    cssSelector.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}

slider.forEach(element => {
    element.addEventListener('change', eventHandler)
    element.addEventListener('mouseover', eventHandler)

});
