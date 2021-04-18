import {all, call} from "redux-saga/effects";
import {saga as appSaga} from './app/saga'
import {saga as photosSaga} from './photos/saga'
import {saga as searchSaga} from './search/saga'
import {saga as topicsSaga} from './topics/saga'

function* saga(){
    yield all([
       call(appSaga),
        call(photosSaga),
        call(searchSaga),
        call(topicsSaga)
    ])
}



export default saga;