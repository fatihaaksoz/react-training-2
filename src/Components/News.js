import React, {Component} from "react";
import NewsItem from "./NewsItem";

class News extends Component {
    render() {
        // let nameLetter = <div>Mehmet</div>
        // const title = "react js"
        // const description = "react js description"
        // const news = [
        //     {
        //         title: "Title 1",
        //         description: "Description 1"
        //     },
        //     {
        //         title: "Title 2",
        //         description: "Description 2"
        //     },
        //     {
        //         title: "Title 3",
        //         description: "Description 3"
        //     }
        // ];
        return (
            <div>
                {/*{ 2 - 2 === 0 ? "evet" : "hayir"}*/}
                {/*{nameLetter}*/}
                {/*<NewsItem title={title} description={description}/>*/}
                {/*<NewsItem title = {news[0].title} description = {news[0].description}/>*/}
                {/*<NewsItem title = {news[1].title} description = {news[1].description}/>*/}
                {/*<NewsItem title = {news[2].title} description = {news[2].description}/>*/}
                {
                    this.props.news.map(m => <NewsItem key ={m.id} title={m.title} description={m.description}/>)
                }
            </div>
        )
    }
}

export default News;