import React, { PropTypes } from 'react';
import Item from './Item';

const List = ({ results, resultCount }) => (
  <div className="ui link cards">
    {resultCount > 0 ? results.map((item, index) => <Item key={index} {...item} /> ) : null}
  </div>
);

List.propTypes = {
  results: PropTypes.array,
  resultCount: PropTypes.number
};

export default List;
