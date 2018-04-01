import React, {Component} from 'react'
import Comments from '../Comments'

class CommentsList extends Component {
    getCommentsElements() {
        const { comments } = this.props
        if(!comments) return
        return comments.map(comment => (
            <li key = {comment.id} className="article-list__li">
                <Comments comment = {comment}/>
            </li>
        ))
    }

    render() {
        return (
            <div >
                <ul>
                    {this.getCommentsElements()}
                </ul>
            </div>
        )
    }
}

export default CommentsList