import React from 'react';
import classNames from 'classnames';
import emitter from '../emitter';
import $ from 'jquery';
import 'imports?$=jquery,jQuery=jquery!../vender/transition';
import 'imports?$=jquery,jQuery=jquery!../vender/dropdown';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      media: 'all'
    };

    this._search = this._search.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount () {

    let self = this;

    // initialize semantic UI dropdown
    $('.ui.dropdown').dropdown({
      onChange (value) {

        self.setState({
          media: value
        });

        // only start search if there is a search query inside of input box
        self.state.query && emitter.emit('search', self.state);

      }
    });

  }

  componentWillUnmount () {
    // reset dropdown
    $('.ui.dropdown').dropdown('refresh');
  }

  _search (e) {
    // only trigger search while user type enter
    e.keyCode === 13 && emitter.emit('search', this.state);
  }

  _onChange (e) {
    // set query state
    this.setState({
      query: e.target.value
    });
  }

  render () {

    return (
      <div className="ui inverted vertical segment center aligned">
        <div className="ui right action left icon input massive">
          <i className="search icon"></i>
          <input type="text" onKeyDown={this._search} onChange={this._onChange} placeholder="Search..." autoFocus />
          <div className="ui dropdown button">
            <div className="text">All</div>
            <i className="dropdown icon"></i>
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
