import { Reducer, combineReducers} from 'redux';
import { IAppState } from './model';

import { createPersonsReducer } from '../reducers/persons.reducer';

export const reducerMap = {
    personsState: createPersonsReducer()
};

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>(reducerMap);




