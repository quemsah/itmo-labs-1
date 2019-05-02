import {
    setAttributes
} from './task';
import {
    Task
} from './task';
//конфигурационный файл
import tasks from '../tasks.config.js';
//sorting json object by key
const sortByKey = (array, key) => array.sort((a, b) => ((a[key] < b[key]) ? -1 : ((a[key] > b[key]) ? 1 : 0)))

export default class Body {
    constructor() {
        this.state = {
            tasks: tasks
        }
    }
    //рендер всего полотна в <body></body>
    render() {
        let row = setAttributes(document.createElement('div'), {
            "class": "row"
        })
        //цикл для рендера блоков Task
        //и сортировка по имени лабораторной
        sortByKey(this.state.tasks, 'name')
            .forEach((item) => {
                row.appendChild((new Task({
                    name: item.name,
                    taskLink: item.taskLink,
                    codeLink: item.codeLink,
                    ansLink: item.ansLink
                }))
                .render())
            });

        return setAttributes(document.createElement('div'), {
                "class": "wrapper"
            })
            .appendChild(setAttributes(document.createElement('header'), {
                    "id": "header"
                }).appendChild(setAttributes(document.createElement('span'), {
                        "href": "index.html",
                        "class": "logo"
                    })
                    .appendChild(setAttributes(document.createElement('span'), {
                        "text": "/"
                    }))
                    .parentElement
                    .appendChild(setAttributes(document.createElement('strong'), {
                        "text": "itmo"
                    }))
                    .parentElement
                    .appendChild(setAttributes(document.createElement('span'), {
                        "text": "-labs"
                    }))
                    .parentElement)
                .parentElement)
            .parentElement
            .appendChild(setAttributes(document.createElement('div'), {
                    "class": "alt",
                    "id": "main"
                })
                .appendChild(setAttributes(document.createElement('section'), {
                        "id": "one"
                    })
                    .appendChild(setAttributes(document.createElement('header'), {
                            "class": "major"
                        })
                        .appendChild(setAttributes(document.createElement('h1'), {
                            "text": "Лабораторные работы ntcn"
                        }))
                        .parentElement)
                    .parentElement
                    .appendChild(setAttributes(document.createElement('h3'), {})
                        .appendChild(setAttributes(document.createElement('a'), {
                            "href": "https://github.com/quemsah/itmo-labs",
                            "text": "https://github.com/quemsah/itmo-labs"
                        }))
                        .parentElement)
                    .parentElement
                    .appendChild(row)
                    .parentElement)
                .parentElement)
            .parentElement;
    }
}