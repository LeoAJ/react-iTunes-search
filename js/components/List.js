import React, { Component, PropTypes } from 'react';
import Item from './Item';

class List extends Component {

  render () {

    let {res} = this.props;

    return (
      <div className="ui link cards">
        {res ? res.results.map((item) => {
          return (<Item key={item.trackId} data={item} />);
        }) : null}
      </div>
    );
  }

}

List.propTypes = {
  res: PropTypes.object
};

export default List;
