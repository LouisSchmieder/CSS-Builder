class StyleManager {

    constructor(element) {
        this.element = element;
        this.styleData = [];
    }

    style(styleName, value) {
        this.element.style[styleName] = value;
        this.styleData[styleName] = value;
        if (document.getElementById(styleName) === null) {
            this.addNewToList(styleName);
        }
    }

    addNewToList(styleName) {
        let element = document.createElement('div');
        element.id = styleName;
        element.class = 'listEntry';
        let label = document.createElement('p');
        label.innerText = styleName;
        let value = document.createElement('input');
        value.id = styleName + '_value';
        value.addEventListener('change', () => {
            this.style(styleName, value.innerText);
        });
        element.appendChild(label);
        element.appendChild(value);
        document.getElementById('list').appendChild(element);
        return element;
    }

}

export { StyleManager }
