import {combineReducers} from 'redux'
import {reducer as appReducer} from './app/redux'
import {reducer as photosReducer} from './photos/redux'
import {reducer as searchReducer} from './search/redux'
import {reducer as topicsReducer} from './topics/redux'

export const reducer = combineReducers({
    app: appReducer,
    photos: photosReducer,
    search: searchReducer,
    topics: topicsReducer
})