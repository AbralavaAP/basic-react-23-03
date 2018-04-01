import React, {Component} from 'react'
import CommentsList from '../CommentsList'
import './index.css'

class Article extends Component {
    state = {
        isOpen: true
    }

    getBody() {
        const { article, isOpen } = this.props
        const { comments } = article
        if (!isOpen) return null

        return (
            <section>
                {article.text}
                <div className="alert alert-info text-center" onClick = {this.toggle}>{this.state.isOpen ? 'View comments' : 'Close comments'}</div>
                <CommentsList comments = {this.state.isOpen ? false : comments}/>
            </section>
        )
    }

    render() {
        const { article, isOpen, toggleOpen } = this.props
        return (
            <div className="card mx-auto">
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={toggleOpen} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'Close' : 'Read more'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {this.getBody()}
                </div>
            </div>
        )
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Article