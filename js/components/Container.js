import React from 'react';
import List from './List';
import emitter from '../emitter';
import classNames from 'classnames';
import reqwest from 'reqwest';

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      res: null
    };
  }

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
        emitter.emit('resetLoader');
      });
    });

  }

  componentWillUnmount () {
    emitter.removeListener('search');
  }

  render () {
    
    return (
      <div className="container">
        <div className={
          classNames({
            'ui': true,
            'loader': true,
            'active': false
          })
        }></div>
        <List res={this.state.res} />
      </div>
    );
  }

}

export default Container;