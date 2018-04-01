import React, {Component} from 'react'
import Article from '../Article'
import accordion from '../../decorators/accordion';
import './index.css'

class ArticleList extends Component {
    getArticleElements() {
        const { articles, openItemId, toggleItem } = this.props
        return articles.map(article => (
            <li key = {article.id} className="article-list__li">
                <Article article = {article}
                        isOpen = {article.id === openItemId}
                        toggleOpen = {toggleItem(article.id)}
                />
            </li>
        ))
    }
    render() {
        return (
            <ul> 
                {this.getArticleElements()}
            </ul>
        )
    }
}

export default accordion(ArticleList)
