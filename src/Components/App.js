import logo from '../logo.svg';
import '../App.css';
import News from "./News";

function App() {
    const news = [
        {
            id : 1,
            title: "Title 1",
            description: "Description 1"
        },
        {
            id : 2,
            title: "Title 2",
            description: "Description 2"
        },
        {
            id : 3,
            title: "Title 3",
            description: "Description 3"
        }
    ];
    return (
        <div className="App">
            <News news={news}/>
        </div>
    );
}

export default App;
