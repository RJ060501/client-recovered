// Actions
export const UPDATE_FORM_STATE = 'UPDATE_FORM_STATE';

// Selectors
export function getFormState(state, form) {
    return {
        type: UPDATE_FORM_STATE
    };
}

// (state && state.finalForm && state.finalForm[form]) || {}