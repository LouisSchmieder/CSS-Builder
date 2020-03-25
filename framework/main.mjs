import { StyleManager } from "./modules/manager/styleManager";

window.addEventListener('load', () => {
    main();
});

var styleManager;

function main() {
    document.getElementById('new').addEventListener('click', () => {
        let elementName = prompt('Element name', 'div');
        if (elementName != null) {
            newElement(elementName);
        }
    });
    document.getElementById('addStyle').addEventListener('click', () => {
        let styleName = prompt('Style name', 'width');
        if (styleName != null) {
            styleManager.style(styleName, '0');
        }
    });
}

function newElement(elementName) {
    let element = document.createElement(elementName);
    document.getElementById('view').appendChild(element);
    styleManager = new StyleManager(element);
}
