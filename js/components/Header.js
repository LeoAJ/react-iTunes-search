import React from 'react';
import classNames from 'classnames';
import emitter from '../emitter';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoading: false
    };
    this._search = this._search.bind(this);
  }

  componentDidMount () {
    emitter.on('resetLoader', () => {
      this.setState({
        showLoading: false
      });
    });
  }

  componentWillUnmount () {
    emitter.removeListener('resetLoader');
  }

  _search (e) {
    // only trigger search while user type enter
    if (e.keyCode === 13) {
      this.setState({
        showLoading: true
      });
      emitter.emit('search', e.target.value);
    }
  }

  render () {
    
    return (
      <div className="ui inverted segment center aligned">
        <h1 className="ui header">
          <div className={classNames('ui', 'icon', 'input', {
            'loading': this.state.showLoading
          })}>
            <input type="text" onKeyDown={this._search} placeholder="Search..." autoFocus />
            <i className="search icon"></i>
          </div>
        </h1>
      </div>
    );
  }

}

export default Header;