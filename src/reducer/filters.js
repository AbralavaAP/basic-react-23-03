import { SELECT_ARTICLE } from '../constants'

const defaultFilters = {
    selected: []
}

export default (filters = defaultFilters, action) => {
    const { type, payload } = action

    switch (type) {
        case SELECT_ARTICLE:
            return {...filters, selected: payload.selected}
        
        default:
            return filters
    }
}