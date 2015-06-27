import React from 'react';
import BaseComponent from './BaseComponent';
import emitter from '../emitter';

class Header extends BaseComponent {

  search (e) {
    // only trigger search while user type enter
    if (e.keyCode === 13) {
      emitter.emit('search', e.target.value);
    }
  }

  render () {
    return (
      <div className="ui inverted segment center aligned">
        <h1 className="ui header">
          <div className="ui icon input">
            <input type="text" onKeyDown={this.search} placeholder="Search..." />
            <i className="search icon"></i>
          </div>
        </h1>
      </div>
    );
  }

}

export default Header;