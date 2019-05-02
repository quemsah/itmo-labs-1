import React, {Component as C} from 'react';
import {render as r} from 'react-dom';
import Degs from './components/degs';

const exps = 1;
const data = 'Мы связаны!';
class App extends C {
    constructor() {
        super();
        this.state = {
            exps: exps,
            data: data
        }
    }
    click() {
        this.setState(({exps}) => ({
            exps: + exps + 1
        }));
    }
    changeDeg(v) {
        this.setState({exps: v});
    }
    changeInput(e) {
        this.setState({data: e.target.value});
    }
    render() {
        return (
            <div>
                <input
                    value={this.state.data}
                    onChange={this
                    .changeInput
                    .bind(this)}/>
                <br></br>
                <input
                    value={this.state.data}
                    onChange={this
                    .changeInput
                    .bind(this)}/>
                <br></br>
                <br></br>
                <button
                    onClick={this
                    .click
                    .bind(this)}>Добавить</button>
                <input
                    value={this.state.exps}
                    onChange=
                    {({target: {value: v}}) => this.changeDeg(v)}/>
                <Degs
                    a={Array.from({
                    length: this.state.exps
                }, (v, i) => 10 + i)}/>
            </div>
        )
    }
}
r(
    <App a={exps}/>, document.querySelector('.cont'));
