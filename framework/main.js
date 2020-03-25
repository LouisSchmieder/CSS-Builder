import { StyleManager } from "./modules/manager/styleManager.js";

var styleManager;

document.getElementById('new').addEventListener('click', () => {
    let elementName = prompt('Element name', 'div');
    if (elementName != null) {
        newElement(elementName);
        styleManager.style('width', '200px');
        styleManager.style('height', '50px');
        styleManager.style('background-color', 'rgba(0, 0, 0, 0.5)');
    }
});
document.getElementById('addStyle').addEventListener('click', () => {
    let styleName = prompt('Style name', 'width');
    if (styleName != null) {
        styleManager.style(styleName, '0');
    }
});

document.getElementById(('export')).addEventListener('click', () => {
    let stylesheetsnippet = styleManager.export();
    console.log(stylesheetsnippet);
});

function newElement(elementName) {
    let element = document.createElement(elementName);
    document.getElementById('view').appendChild(element);
    styleManager = new StyleManager(element);
}
