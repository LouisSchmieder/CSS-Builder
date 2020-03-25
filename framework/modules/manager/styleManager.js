class StyleManager {

    constructor(element) {
        this.element = element;
        this.styleData = [];
    }

    style(styleName, value) {
        this.element.style[styleName] = value;
        this.styleData[styleName] = this.element.style[styleName];

        if(this.styleData['width'] != null) {
            let left;
            let width;
            let format = '';
            if(this.styleData['width'].endsWith('px')) {
                width = parseInt(this.styleData['width'].replace('px', ''));
                format = 'px';
            } else if(this.styleData['width'].endsWith('%')) {
                width = parseInt(this.styleData['width'].replace('%', ''));
                format = '%';
            }
            left = window.screen.availWidth / 2 - width / 2;
            this.element.style.left = left + '' + format;
        }
        if(this.styleData['height'] != null) {
            let top;
            let height;
            let format = '';
            if(this.styleData['height'].endsWith('px')) {
                height = parseInt(this.styleData['height'].replace('px', ''));
                format = 'px';
            } else if(this.styleData['width'].endsWith('%')) {
                height = parseInt(this.styleData['height'].replace('%', ''));
                format = '%';
            }
            top = window.screen.availHeight * 0.3 / 2 - height / 2;
            this.element.style.top = top + format;
        }

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
