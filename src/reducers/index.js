import { combineReducers } from 'redux';
import formReducer from './formReducer';
// NOT recommended anymore... migrate to final form
// import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer
});