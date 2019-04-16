export default class Task {
    constructor(props) {
        this.props = props;
    }

    render() {

        let div = document.createElement('div');
        div.className = 'col-3 col-12-medium';

        let h3 = document.createElement('h3');
        h3.textContent = this.props.name;
        div.appendChild(h3);

        let ul = document.createElement('ul');
        ul.className = 'actions stacked';
        div.appendChild(ul);
        if (this.props.taskLink) {
            let liTask = document.createElement('li');
            ul.appendChild(liTask);
            let aTask = document.createElement('a');
            aTask.className = 'button primary fit small';
            aTask.href = this.props.taskLink;
            aTask.textContent = 'Задание';
            liTask.appendChild(aTask);
        }
        if (this.props.codeLink) {
            let liCode = document.createElement('li');
            ul.appendChild(liCode);
            let aCode = document.createElement('a');
            aCode.className = 'button primary fit small';
            aCode.href = this.props.codeLink;
            aCode.textContent = 'Исходный код';
            liCode.appendChild(aCode);
        }
        if (this.props.ansLink) {
            let liAns = document.createElement('li');
            ul.appendChild(liAns);
            let aAns = document.createElement('a');
            aAns.className = 'button primary fit small';
            aAns.href = this.props.ansLink;
            aAns.textContent = 'Результат';
            liAns.appendChild(aAns);
        }
        return div;
    }
}