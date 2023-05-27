import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from '../component/spinner'
export class News extends Component {
//   static propTypes = {

//   }
articles = []
constructor(){
    super();
    this.state = {
        articles: this.articles,
        loading: false,
        page:1,
    }
}
async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1f30082f362748718160269860e9bef4&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)
    this.setState({page : this.state.page + 1,
        articles:parsedData.articles,
        totalResults:parsedData.totalResults
    })
}

handleNextclick = async() => {

    if(this.state.page + 1 > Math.floor(this.state.totalResults / this.props.pageSize)){

    }else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1f30082f362748718160269860e9bef4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({loadaing:true})
    let data = await fetch(url);
    var parsedData = await data.json();
    // console.log(parsedData)
    }
    
    this.setState({page : this.state.page + 1,
        articles: parsedData.articles,
        loading:false
    })
}

handlePrevClick = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1f30082f362748718160269860e9bef4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loadaing:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData)

    this.setState({page : this.state.page - 1,articles:parsedData.articles,loading:false})
}

  render() {
    return (
      <div className="container my-3">
        <h2>Web-News Top Headlines</h2>
        {/* <Spinner/> */}
        {this.state.loading && <Spinner/>}
        <div className="row">
            { !this.state.loading && this.state.articles.map((element)=>{
               return <div className="col-md-4" key={element.url}>
                <NewsItem  title={element.title ? element.title + "..." : " "} description= {element.description ? element.description + "...": " "} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
  })}
        </div>
        <div className="container d-flex justify-content-evenly">
            <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
