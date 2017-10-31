// @flow
import React, { PropTypes } from 'react';
import { getKind, kindColorMap } from '../utils';
import type { SearchResult } from '../type';
import '../style/Item.css';

const Item = (props: SearchResult) => (
  <div className="card-wrapper">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img
          alt="img"
          className="activator"
          src={props.artworkUrl100.replace('100x100', '1200x1200')}
        />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{props.trackName || props.collectionName}<i className="material-icons right">more_vert</i></span>
        <p>
          <a target="_blank" href={props.trackViewUrl || props.collectionViewUrl}>
            more
          </a>
          {
            getKind(props.kind).length ?
              <p className={`right kind white-text ${props.kind in kindColorMap ? `${kindColorMap[props.kind]}` : 'black'}`}>
                {getKind(props.kind)}
              </p> : null
          }
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.trackName || props.collectionName}<i className="material-icons right">close</i></span>
        <p>{props.longDescription || props.description || 'No description.'}</p>
      </div>
    </div>
  </div>
);

export default Item;
