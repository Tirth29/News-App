import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
export class News extends Component {
  articles = [];

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.props.category}-NewsMonkey`;
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category:${this.props.category}&apikey=85cf6d66d8c84bc994b9b6634a59e86f&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let persedData = await data.json();
    console.log(persedData);
    this.setState({
      page: this.state.page + 1,
      articles: persedData.articles,
      loading: false,
    });
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=85cf6d66d8c84bc994b9b6634a59e86f&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let persedData = await data.json();
    console.log(persedData);
    this.setState({ articles: persedData.articles, loading: false });
  }

  handlenextclick = async () => {
    console.log("handlenextclick");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category:${this.props.category}&apikey=85cf6d66d8c84bc994b9b6634a59e86f&page=${
    //   this.state.page + 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let persedData = await data.json();
    // console.log(persedData);
    // this.setState({
    //   page: this.state.page + 1,
    //   articles: persedData.articles,
    //   loading:false
    // });
    this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };

  handleprevclick = async () => {
    console.log("handleprevclick");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category:${this.props.category}&apikey=85cf6d66d8c84bc994b9b6634a59e86f&page=${
    //     this.state.page - 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let persedData = await data.json();
    //   console.log(persedData);
    //   this.setState({
    //     page: this.state.page - 1,
    //     articles: persedData.articles,
    //     loading:false
    //   });
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1
          className="text-center"
          style={{ margin: "30px", marginTop: "90px" }}
        >
          NewsMonkey-Top Headlines From {this.props.category}
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : " "}
                    description={
                      element.description ? element.description : " "
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://t4.ftcdn.net/jpg/00/38/13/73/360_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg"
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
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
