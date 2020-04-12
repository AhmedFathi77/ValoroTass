import {combineReducers} from 'redux';
import {getRequestsSchoolsReducer} from './requested-schools-reducer'

export const rootReducer = combineReducers({
    getRequestsSchoolsReducer,
});

export type RootState = ReturnType<typeof rootReducer>
