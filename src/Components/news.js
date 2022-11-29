import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  articles = [
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Wyatte Grantham-Philips",
      title:
        "Mauna Loa eruption prompts officials to warn of a worst-case scenario - USA TODAY",
      description:
        "Hawaiian officials advised people to take precautionary measures after the largest active volcano in the world began to erupt late Sunday.",
      url: "https://www.usatoday.com/story/news/nation/2022/11/28/hawaii-volcano-mauna-loa-erupts/10788634002/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/10/28/USAT/d8e6bc3c-f6d3-46d7-ab3c-35c86b84aa30-AP22300609033810.jpg?crop=3599,2025,x0,y270&width=3200&height=1801&format=pjpg&auto=webp",
      publishedAt: "2022-11-29T05:05:48Z",
      content:
        "Mauna Loa, the largest active volcano in the world, has begun to erupt in Hawaii, the U.S. Geological Survey and other authorities said, prompting officials warning people living on Hawaiis Big Islan… [+5245 chars]",
    },
    {
      source: { id: null, name: "Variety" },
      author: "J. Kim Murphy",
      title:
        "Will Smith Appears on ‘The Daily Show’ in First Late-Night Interview Since Oscars Slap: ‘That Is Not Who I Want to Be’ - Variety",
      description:
        "After a series of online statements and quiet public appearances over recent months, Will Smith took further steps back into the spotlight Monday evening, appearing for an interview on “The Daily Show With Trevor Noah.” Promoting his new historical drama “Ema…",
      url: "https://variety.com/2022/tv/news/will-smith-daily-show-trevor-noah-oscars-slap-1235443683/",
      urlToImage:
        "https://variety.com/wp-content/uploads/2022/11/will-smith-daily-show.jpg?w=1000&h=563&crop=1",
      publishedAt: "2022-11-29T05:04:00Z",
      content:
        "After a series of online statements and quiet public appearances over recent months, Will Smith took further steps back into the spotlight Monday evening, appearing for an interview on “The Daily Sho… [+3333 chars]",
    },
    {
      source: { id: null, name: "Apple Newsroom" },
      author: null,
      title:
        "App Store Awards celebrate the best apps and games of 2022 - Apple",
      description:
        "Apple today announced the winners of the 2022 App Store Awards, spotlighting 16 apps and games that inspired users and helped them stay connected.",
      url: "https://www.apple.com/newsroom/2022/11/app-store-awards-celebrate-the-best-apps-and-games-of-2022/",
      urlToImage:
        "https://www.apple.com/newsroom/images/product/apps/standard/Apple-App-Store-Awards-2022-Trophy.jpg.og.jpg?202211290942",
      publishedAt: "2022-11-29T04:34:11Z",
      content:
        "November 28, 2022\r\nPRESS RELEASE\r\nApp Store Awards celebrate the best apps and games of 2022\r\nCUPERTINO, CALIFORNIA Apple today announced the winners of the 2022 App Store Awards, spotlighting 16 app… [+6182 chars]",
    },

    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Laura Vozzella, Meagan Flynn",
      title:
        "Virginia Congressman Donald McEachin dies at 61 - The Washington Post",
      description:
        "McEachin represented Virginia's 4th Congressional District and had won reelection just weeks ago.",
      url: "https://www.washingtonpost.com/dc-md-va/2022/11/28/donald-mceachin-congress-dies/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GNTIWFUVDQI6TFLKRDBJDK24HA.jpg&w=1440",
      publishedAt: "2022-11-29T10:32:07Z",
      content:
        "Comment on this story\r\nRICHMOND Rep. A. Donald McEachin (D-Va.) died Monday, just weeks after winning reelection to Congress, his office announced.He was 61.\r\nMcEachin had represented Virginias 4th D… [+6103 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Issy Ronald",
      title:
        "Iran faces USMNT in winner-takes-all match to progress to World Cup knockout stages - CNN",
      description:
        "The knockout stage has already arrived for the United States Men's National Team (USMNT) at the World Cup -- nothing less than a win on Tuesday will suffice when it takes on Iran in a winner-takes-all match.",
      url: "https://www.cnn.com/2022/11/28/football/usmnt-iran-preview-world-cup-2022-spt-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221127132507-05-us-iran-world-cup-preview.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-11-29T09:48:00Z",
      content:
        "The knockout stage has already arrived for the United States Mens National Team (USMNT) at the World Cup nothing less than a win on Tuesday will suffice when it takes on Iran in a winner-takes-all ma… [+4689 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-2">
        <h2>NewsMonkey-Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
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
