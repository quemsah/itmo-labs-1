import React, {Component as C} from 'react';
import {render as r} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';
import Counter from './Counter';

const f = 'DD';

class App extends C {
    constructor() {
        super();
        this.state = {
            day: 3
        };
    }
    render() {
        return (
            <div>
                <Counter stars={this.state.day}/>
                <DatePicker
                    onChange=
                    {(n = null, date) => { let day = moment(date).format(f); this.setState({day}); }}
                    floatingLabelText="Выберите дату!"/>
            </div>
        );
    }
}
r(
    <MuiThemeProvider><App/></MuiThemeProvider>, document.querySelector('.cont'),);
