import { SIGN_IN, SIGN_OUT, UPDATE_FORM_STATE } from './types';

// Action Creators
export const updateFormState = (form, state) => ({
  type: UPDATE_FORM_STATE,
  form,
  payload: state
})

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
    return {
      type: SIGN_OUT
    };
  };
  