import React, { Component as Comp } from 'react';

export default class extends Comp {
  constructor(props) {
    super(props);
    this.state = {
      term: props.dfltVl
    };
  }

  onInputChange(term) {
    this.setState({
      term
    });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (<div className="search-bar">
            <input
              value={this.state.term}
              onChange={e => this.onInputChange(e.target.value)}
            />
           </div>);
  }
}
