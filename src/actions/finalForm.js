import { UPDATE_FORM_STATE } from "./types"
// Reducer
export default function reducer(state = {}, action = {}) {
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

// Selectors
export const getFormState = (state, form) =>
    (state && state.finalForm && state.finalForm[form]) || {}