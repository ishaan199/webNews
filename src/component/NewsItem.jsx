import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class NewsItem extends Component {
//   static propTypes = {

//   }

  render() {
    const {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-4'>
            <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl ? imageUrl : "data:image/png;base64,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"} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
