import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { getKind } from '../utils';

class Item extends Component {

  render () {

    const { trackPrice,
            collectionPrice,
            price,
            trackViewUrl,
            collectionViewUrl,
            artworkUrl100,
            trackName,
            collectionName,
            kind,
            artistName,
            longDescription,
            description,
            releaseDate } = this.props,

            finalPrice = trackPrice || collectionPrice || price,
            priceDom = typeof finalPrice === 'number' ?
                                      <span>
                                        <i className="dollar icon"></i>
                                        {finalPrice}
                                      </span> : null;
                                      
    return (
      <a className="ui card" href={trackViewUrl || collectionViewUrl} target="_blank">
        <div className="image">
          <img src={artworkUrl100.replace('100x100', '1200x1200')} />
        </div>
        <div className="content">
          <div className="header">{trackName || collectionName}</div>
          <div className="meta right floated">
            {getKind(kind)}
          </div>
          <div className="meta">
            {artistName}
          </div>
          <div className="description">
            {longDescription || description}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Release on {moment(releaseDate).format('MMM DD, YYYY')}
          </span>
          {priceDom}
        </div>
      </a>
    );

  }

}

export default Item;
