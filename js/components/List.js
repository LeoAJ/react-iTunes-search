import React from 'react';
import Item from './Item';

class List extends React.Component {

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

export default List;
