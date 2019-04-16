import {
    setAttributes
} from './task';
import {
    Task
} from './task';
import tasks from '../tasks.config.js'

export default class Body {
    constructor() {
        this.state = {
            tasks: tasks
        }
    }
    render() {
        let row = setAttributes(document.createElement('div'), {
            "class": "row"
        })

        this.state.tasks.forEach((item) => {
            row.appendChild((new Task({
                name: item.name,
                taskLink: item.taskLink,
                codeLink: item.codeLink,
                ansLink: item.ansLink
            })).render())
        });

        return setAttributes(document
                .createElement('div'), {
                    "class": "wrapper"
                })
            .appendChild(setAttributes(document
                    .createElement('header'), {
                        "id": "header"
                    }).appendChild(setAttributes(document
                        .createElement('span'), {
                            "href": "index.html",
                            "class": "logo"
                        })
                    .appendChild(setAttributes(document
                        .createElement('span'), {
                            "text": "/"
                        }))
                    .parentElement
                    .appendChild(setAttributes(document
                        .createElement('strong'), {
                            "text": "itmo"
                        }))
                    .parentElement
                    .appendChild(setAttributes(document
                        .createElement('span'), {
                            "text": "-labs"
                        }))
                    .parentElement)
                .parentElement)
            .parentElement
            .appendChild(setAttributes(document
                    .createElement('div'), {
                        "class": "alt",
                        "id": "main"
                    })
                .appendChild(setAttributes(document
                        .createElement('section'), {
                            "id": "one"
                        })
                    .appendChild(setAttributes(document
                            .createElement('header'), {
                                "class": "major"
                            })
                        .appendChild(setAttributes(document
                            .createElement('h1'), {
                                "text": "Лабораторные работы"
                            }))
                        .parentElement)
                    .parentElement
                    .appendChild(setAttributes(document
                            .createElement('h3'), {})
                        .appendChild(setAttributes(document
                            .createElement('a'), {
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