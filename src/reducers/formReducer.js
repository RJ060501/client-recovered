import { UPDATE_FORM_STATE } from '../actions/finalForm';

export default (state = [], action) => {
    switch (action.type) {
        case UPDATE_FORM_STATE:
            return {
                ...state,
                [action.form]: action.payload
            }
        default:
            return state
    }
}