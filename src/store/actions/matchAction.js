import { SET_SELECTED_MATCH} from '../types'

export const setSelectedMatches = (selectedMatchList) => async dispatch => {
    
        
        dispatch( {
            type: SET_SELECTED_MATCH,
            payload: selectedMatchList
        })

}