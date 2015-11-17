import React, { Component, PropTypes } from 'react';
import Item from './Item';

class List extends Component {

  render () {

    const { results, resultCount } = this.props;

    return (
      <div className="ui link cards">
        {resultCount > 0 ? results.map((item, index) => <Item key={index} {...item} /> ) : null}
      </div>
    );
  }

}

export default List;
