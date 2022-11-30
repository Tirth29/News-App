import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [];
  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: true,
    };
  }
   async componentDidMount(){
    console.log("cdm");
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=85cf6d66d8c84bc994b9b6634a59e86f"
    let data = await fetch(url);
    let persedData = await data.json();
    console.log(persedData);
    this.setState({articles: persedData.articles});
  }
  
  render() {
    return (
      <div className="container my-2">
        <h1>NewsMonkey-Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title?element.title:" "}
                  description={element.description ? element.description:" "}
                  imageUrl={element.urlToImage ? element.urlToImage:"https://t4.ftcdn.net/jpg/00/38/13/73/360_F_38137330_gUbR3ZXBc5J5g4pRkaC8TYZQA62OZhx5.jpg"}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
