import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DateRange from './date-range'
import SelectFilter from './select'

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <SelectFilter articles = {this.props.articles}/>
                <DateRange />
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles
}))(Filters)