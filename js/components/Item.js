// @flow
import React, { PropTypes } from 'react';
import fecha from 'fecha';
import { getKind } from '../utils';
import type { SearchResult } from '../type';

const Item = (props: SearchResult) => (
  <a
    className="ui card"
    href={props.trackViewUrl || props.collectionViewUrl}
    target="_blank" rel="noopener noreferrer"
  >
    <div className="image">
      <img alt="img" src={props.artworkUrl100.replace('100x100', '1200x1200')} />
    </div>
    <div className="content">
      <div className="header">{props.trackName || props.collectionName}</div>
      <div className="meta right floated">
        {getKind(props.kind)}
      </div>
      <div className="meta">
        {props.artistName}
      </div>
      <div className="description">
        {props.longDescription || props.description}
      </div>
    </div>
    <div className="extra content">
      {props.releaseDate && <span className="right floated">
        Release on {fecha.format(new Date(props.releaseDate), 'MMM D, YYYY')}
      </span>}
      {(typeof props.trackPrice || props.collectionPrice || props.price === 'number') &&
        <span>
          <i className="dollar icon" />
          {props.trackPrice || props.collectionPrice || props.price || 0}
        </span>
      }
    </div>
  </a>
);

export default Item;
