import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
export class News extends Component {
  articles = [];
  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=85cf6d66d8c84bc994b9b6634a59e86f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let persedData = await data.json();
    console.log(persedData);
    this.setState({ articles: persedData.articles, loading:false });
  }

  handlenextclick = async () => {
    console.log("handlenextclick");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=85cf6d66d8c84bc994b9b6634a59e86f&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let persedData = await data.json();
    console.log(persedData);
    this.setState({
      page: this.state.page + 1,
      articles: persedData.articles,
      loading:false
    });
  };

  handleprevclick = async () => {
    console.log("handleprevclick");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=85cf6d66d8c84bc994b9b6634a59e86f&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let persedData = await data.json();
      console.log(persedData);
      this.setState({
        page: this.state.page - 1,
        articles: persedData.articles,
        loading:false
      });
    }
  };

  render() {
    return (
      <div className="container my-2">
        <h1 className="text-center">NewsMonkey-Top Headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : " "}
                  description={element.description ? element.description : " "}
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://t4.ftcdn.net/jpg/00/38/13/73/360_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark btn-lg"
            onClick={this.handleprevclick}
          >
            &larr; Previous{" "}
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-dark btn-lg"
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
