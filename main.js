const manageText = document.querySelector('#textEditor');
const normal = document.querySelector('#normal');
const bold = document.querySelector('#bold');
const italic = document.querySelector('#italic');
const slash = document.querySelector('#slash');
const underline = document.querySelector('#underline');
const left = document.querySelector('#left');
const center = document.querySelector('#center');
const right = document.querySelector('#right');
const justify = document.querySelector('#justify');
const fontSizes = document.querySelector('#fontSize');

const setNormal = normal.addEventListener('click', () => {
    manageText.style.fontWeight = "normal";
    manageText.style.textDecoration = "none";
});

const setBold = bold.addEventListener('click', () => {
    manageText.style.fontWeight = "bold";
});

const setItalic = italic.addEventListener('click', () => {
    manageText.style.fontStyle = "italic";
});

const setSlash = slash.addEventListener('click', () => {
    manageText.style.textDecoration = "line-through";
});

const setUnderline = underline.addEventListener('click', () => {
    manageText.style.textDecoration = "underline";
});

const setTextLeft = left.addEventListener('click', () => {
    manageText.style.textAlign = "left";
});

const setTextCenter = center.addEventListener('click', () => {
    manageText.style.textAlign = "center";
});

const setTextRight = right.addEventListener('click', () => {
    manageText.style.textAlign = "right";
});

const setTextJustify = justify.addEventListener('click', () => {
    manageText.style.textAlign = "justify";
});

const setFontSizing = fontSizes.addEventListener('change', (event) => {
    manageText.style.fontSize = `${event.target.value}px`;
});