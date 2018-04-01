import React, {Component} from 'react'
import ArticleList from '../ArticleList'
import DayPicker from '../DayPicker'
import articles from '../../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        News Feed
                        <button className="btn float-right" onClick = {this.revert}>{this.state.reverted ? 'View the newest articles' : 'View the oldest articles' }</button>
                    </h1>
                </div>
                <div className="text-center">
                    <DayPicker />
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App
