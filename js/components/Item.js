import React from 'react';
import moment from 'moment';
import { getKind } from '../utils';

class Item extends React.Component {

  render () {

    let {data} = this.props,
        price = data.trackPrice || data.collectionPrice || data.price,
        priceDom = typeof price === 'number' ?
                                    <span>
                                      <i className="dollar icon"></i>
                                      {price}
                                    </span> : null;

    return (
      <a className="ui card" href={data.trackViewUrl || data.collectionViewUrl} target="_blank">
        <div className="image">
          <img src={data.artworkUrl100.replace('100x100', '1200x1200')} />
        </div>
        <div className="content">
          <div className="header">{data.trackName || data.collectionName}</div>
          <div className="meta right floated">
            {getKind(data.kind)}
          </div>
          <div className="meta">
            {data.artistName}
          </div>
          <div className="description">
            {data.longDescription || data.description}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Release on {moment(data.releaseDate).format('MMM DD, YYYY')}
          </span>
          {priceDom}
        </div>
      </a>
    );

  }

}

Item.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default Item;
