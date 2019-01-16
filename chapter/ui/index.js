import addList from './add-list'
import addChapter from './add-chapter'
import closeChapter from './close-chapter'
import showForm from './show-form'
import modify from './modify'
import duplicate from './duplicate'
import extractFromForm from './extract-from-form'

// build list of themes based on string.material.themes array
// console.log(string.material.themes);

let themesList = "";
let i, l;
l = string.material.themes.length;
for (i = 0; i < l; i++) {
    themesList += `<option value="${i}">${string.material.themes[i].adjective}</option>`;
}

document.getElementById("creator-theme-selector").innerHTML = themesList;

export {
    addList,
    addChapter,
    closeChapter,
    showForm,
    modify,
    duplicate,
    extractFromForm
}