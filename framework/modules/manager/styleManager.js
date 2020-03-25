class StyleManager {

    constructor(element) {
        this.element = element;
        this.styleData = [];
    }

    style(styleName, value) {
        this.element.style[styleName] = value;
        this.styleData[styleName] = this.element.style[styleName];
        if (document.getElementById(styleName) === null) {
            this.addNewToList(styleName);
        }
    }

    addNewToList(styleName) {
        let element = document.createElement('div');
        element.id = styleName;
        element.class = 'listEntry';
        element.innerText = styleName;
        let value = document.createElement('input');
        value.id = styleName + '_value';
        value.addEventListener('change', (e) => {
            this.style(styleName, e.srcElement.value);
        });
        console.log(this.styleData);
        value.innerText = this.styleData[styleName];
        element.appendChild(value);
        document.getElementById('list').appendChild(element);
        return element;
    }

}

export { StyleManager }
