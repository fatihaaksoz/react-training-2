import React, {Component} from "react";
import "../App.css"
import "../NewsItem.css"

class NewsItem extends Component{
    render() {
        return(
            <div className="App">
                {/*<h1 className="title">Hello React</h1>*/}
                {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>*/}

                <h1 className="title">{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default NewsItem;