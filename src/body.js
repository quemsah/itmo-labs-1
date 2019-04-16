import Task from './task';
import tasks from '../tasks.config.js'

export default class Body {
    constructor(props) {
        this.props = props;
        this.state = {
            tasks: tasks
        };
    }

    render() {
        // document
        // .body
        // .firstChild
        // .appendChild(document.createElement('h1')).appendChild(document.createTextNode('Ещё один'));
        let wrapper = document.createElement('div');
        wrapper.className = 'wrapper';

        let header = document.createElement('header');
        header.id = 'header';
        wrapper.appendChild(header);

        let logo = document.createElement('a');
        logo.href = 'index.html';
        logo.className = 'logo';
        header.appendChild(logo);

        let span = document.createElement('span');
        span.textContent = "/"
        logo.appendChild(span);

        let strong = document.createElement('strong');
        strong.textContent = "itmo"
        logo.appendChild(strong);

        let span2 = document.createElement('span');
        span2.textContent = "-labs"
        logo.appendChild(span2);

        let alt = document.createElement('div');
        alt.className = 'alt';
        alt.id = 'main';
        wrapper.appendChild(alt);

        let section = document.createElement('section');
        section.id = 'one';
        alt.appendChild(section);

        let major = document.createElement('header');
        major.className = 'major';
        section.appendChild(major);

        let h1 = document.createElement('h1');
        h1.textContent = "Лабораторные работы"
        major.appendChild(h1);

        let h3 = document.createElement('h3');
        section.appendChild(h3);

        let a = document.createElement('a');
        a.href = 'https://github.com/quemsah/itmo-labs';
        a.textContent = 'https://github.com/quemsah/itmo-labs';
        h3.appendChild(a);

        let row = document.createElement('div');
        row.className = 'row';
        section.appendChild(row);

        this.state.tasks.forEach((item) => {
            let inp = (new Task({
                name: item.name,
                taskLink: item.taskLink,
                codeLink: item.codeLink,
                ansLink: item.ansLink
            })).render();
            row.appendChild(inp);
        });
        return wrapper;
    }
}