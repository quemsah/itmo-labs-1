const setAttributes = (el, attrs) => {
    for (var key in attrs) {
        (key != 'text') ? el.setAttribute(key, attrs[key]): el.textContent = attrs[key]
    }
    return el;
}
export {setAttributes};

const createLink = (href, text) => setAttributes(document.createElement('a'), {
    "class": "button primary fit small",
    "href": href,
    "text": text
})

export class Task {
    constructor(props) {
        this.props = props
    }
    render() {
        let ul = setAttributes(document
            .createElement('ul'), {
                "class": "actions stacked"
            });
        (this.props.taskLink) ? ul
            .appendChild(document
                .createElement('li'))
            .append(createLink(this.props.taskLink, 'Задание')): null;
        (this.props.codeLink) ? ul
            .appendChild(document
                .createElement('li'))
            .append(createLink(this.props.codeLink, 'Исходный код')): null;
        (this.props.ansLink) ? ul
            .appendChild(document
                .createElement('li'))
            .append(createLink(this.props.ansLink, 'Результат')): null;
        return setAttributes(document
                .createElement('div'), {
                    "class": "col-3 col-12-medium"
                })
            .appendChild(setAttributes(document
                .createElement('h3'), {
                    "text": this.props.name
                }))
            .parentElement
            .appendChild(ul)
            .parentElement;
    }
}