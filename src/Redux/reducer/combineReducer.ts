import {combineReducers} from 'redux'
import { collectionReducer } from './Reducer'


export const rootReducer=combineReducers({
    reducers:collectionReducer,
})
export type RootState=ReturnType<typeof rootReducer>