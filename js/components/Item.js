import React, { PropTypes } from 'react';
import fecha from 'fecha';
import { getKind } from '../utils';

const Item = ({
  trackPrice,
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
  releaseDate
}) => (
  <a
    className="ui card"
    href={trackViewUrl || collectionViewUrl}
    target="_blank" rel="noopener noreferrer"
  >
    <div className="image">
      <img alt="img" src={artworkUrl100.replace('100x100', '1200x1200')} />
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
        Release on {fecha.format(new Date(releaseDate), 'MMM D, YYYY')}
      </span>
      {typeof trackPrice || collectionPrice || price === 'number' ?
        <span>
          <i className="dollar icon" />
          {trackPrice || collectionPrice || price}
        </span> : null
      }
    </div>
  </a>
);

Item.propTypes = {
  trackPrice: PropTypes.number,
  collectionPrice: PropTypes.number,
  price: PropTypes.number,
  trackViewUrl: PropTypes.string,
  collectionViewUrl: PropTypes.string,
  artworkUrl100: PropTypes.string,
  trackName: PropTypes.string,
  collectionName: PropTypes.string,
  kind: PropTypes.string,
  artistName: PropTypes.string,
  longDescription: PropTypes.string,
  description: PropTypes.string,
  releaseDate: PropTypes.string
};

export default Item;
