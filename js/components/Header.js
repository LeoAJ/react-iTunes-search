// @flow
import React, { Component } from 'react';
import $ from 'jquery';
import emitter from '../emitter';
import type { HeaderState } from '../type';

$.fn.transition = require('semantic-ui-transition');
$.fn.dropdown = require('semantic-ui-dropdown');

class Header extends Component {

  emitSearch: () => void;
  _onKeyUp: (e: SyntheticInputEvent & KeyboardEvent) => void; // eslint-disable-line no-undef

  state: HeaderState = {
    media: 'all',
    query: ''
  };

  constructor(props: Object) {
    super(props);
    this.emitSearch = _ => emitter.emit('search', this.state);
    // only trigger search while user type enter
    this._onKeyUp = e => {
      this.setState({
        query: e.target.value
      }, this.dispatchSearchWhileTypeEnter(e.keyCode));
    };
  }

  // $FlowFixMe
  dispatchSearchWhileTypeEnter = (keyCode: number) => _ => keyCode === 13 && this.emitSearch();

  // initialize semantic UI dropdown
  // only start search if there is a search query inside of input box
  componentDidMount() {
    $('.ui.dropdown').dropdown({
      onChange: media => this.setState({ media }, this.emitSearch)
    });
  }

  // reset dropdown
  componentWillUnmount() { // eslint-disable-line class-methods-use-this
    $('.ui.dropdown').dropdown('refresh');
  }

  render() {
    return (
      <div className="ui inverted vertical segment center aligned">
        <div className="ui right action left icon input massive">
          <i className="search icon" />
          <input
            type="text"
            onKeyUp={this._onKeyUp}
            placeholder="Search..."
            autoFocus
          />
          <div className="ui dropdown button">
            <div className="text">All</div>
            <i className="dropdown icon" />
            <div className="menu">
              <div className="item">All</div>
              <div className="item">Audiobook</div>
              <div className="item">eBook</div>
              <div className="item">Movie</div>
              <div className="item">Music</div>
              <div className="item">Music Video</div>
              <div className="item">Podcast</div>
              <div className="item">TV Show</div>
              <div className="item">Short Film</div>
              <div className="item">Software</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
