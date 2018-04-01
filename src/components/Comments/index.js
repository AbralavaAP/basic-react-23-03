import React, {Component} from 'react'

class Comments extends Component {
    render() {
        const { comment } = this.props  
        return (
            <blockquote className="blockquote text-right">
                <small className="text-muted">{comment.text}</small>
                <footer className="blockquote-footer">{comment.user}</footer>
            </blockquote>
        )
    }
}

export default Comments