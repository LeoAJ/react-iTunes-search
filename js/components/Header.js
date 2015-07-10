/*global $ */

import React from 'react';
import classNames from 'classnames';
import emitter from '../emitter';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoading: false,
      media: 'all'
    };
    this._search = this._search.bind(this);
  }

  componentDidMount () {

    let self = this;

    // initialize semantic UI dropdown
    $('.ui.dropdown').dropdown({
      onChange (value) {
        self.setState({
          media: value
        });
      }
    });

    emitter.on('resetLoader', () => {
      this.setState({
        showLoading: false
      });
    });
  }

  componentWillUnmount () {

    // remove listener
    emitter.removeListener('resetLoader');

    // reset dropdown
    $('.ui.dropdown').dropdown('refresh');
  }

  _search (e) {
    // only trigger search while user type enter
    if (e.keyCode === 13) {
      this.setState({
        showLoading: true
      });

      emitter.emit('search', e.target.value, this.state.media);
    }
  }

  // movie, podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook

  render () {

    return (
      <div className="ui inverted vertical segment center aligned">
        <div className="ui right action left icon input massive">
          <i className="search icon"></i>
          <input type="text" onKeyDown={this._search} placeholder="Search..." autoFocus />
          <div className="ui dropdown button">
            <div className="text">All</div>
            <i className="dropdown icon"></i>
            <div className="menu">
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
