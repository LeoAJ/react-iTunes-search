import React from 'react';
import BaseComponent from './BaseComponent';
import moment from 'moment';

class Item extends BaseComponent {

  render () {

    var data = this.props.data,
        date = moment(data.releaseDate).format('MMM DD, YYYY');

    console.log(data);

    return (
      <div className="card">
        <a className="image" href={data.trackViewUrl} target="_blank">
          <img src={data.artworkUrl100.replace('100x100', '1200x1200')} />
        </a>
        <div className="content">
          <div className="header">{data.trackName}</div>
          <div className="meta">
            <a target="_blank" href={data.artistViewUrl}>{data.artistName}</a>
          </div>
          <div className="description">
            {data.shortDescription}
          </div>
        </div>
        <div className="extra content">
          <span className="right floated">
            Release on {date}
          </span>
          <span>
            <i className="dollar icon"></i>
            {data.trackPrice}
          </span>
        </div>
      </div>
    );

  }

}

export default Item;