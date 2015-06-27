import React from 'react';
import BaseComponent from './BaseComponent';
import List from './List';
import emitter from '../emitter';
import classNames from 'classnames';
import reqwest from 'reqwest';

class Container extends BaseComponent {

  componentDidMount () {
    emitter.on('search', (query) => {
      reqwest({
        url: 'https://itunes.apple.com/search?term=' + query.split(' ').join('+'),
        type: 'jsonp'
      })
      .then((res) => {
        this.setState({
          res: res
        });
      })
      .fail((err) => {
        console.log(err);
      })
      .always(() => {

      });
    });

  }

  render () {
    
    var res = this.state && this.state.res;
    
    return (
      <div className="container">
        <div className={
          classNames({
            'ui': true,
            'loader': true,
            'active': false
          })
        }></div>
        <List res={res} />
      </div>
    );
  }

}

export default Container;