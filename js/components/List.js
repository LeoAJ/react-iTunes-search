import React from 'react';
import Item from './Item';

class List extends React.Component {

  render () {

    let res = this.props.res,
        results = res ? res.results.map((item) => {
          return (<Item key={item.trackId} data={item} />);
        }) : null;

    return (
      <div className="ui link cards">
        {results}
      </div>
    );
  }

}

export default List;
