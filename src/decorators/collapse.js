//decorator === Higher Order Component
import React from 'react'

export default OriginalComponent => class DecoratedComponent extends React.Component {
    state = {
        collapseItem: true
    }

    toggleItem = collapseItem => () => this.setState({ collapseItem: this.state.collapseItem === collapseItem ? false : collapseItem })

    render() {
        return <OriginalComponent {...this.props}
                                  collapseItem = {this.state.collapseItem}
                                  toggleItem = {this.toggleItem}
        />
    }
}