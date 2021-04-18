import {all, takeLatest, call , put} from 'redux-saga/effects'
import _ from 'lodash';
import {Action} from "./redux";
import API from "../../api";

export const saga = function*() {
    yield all([
        takeLatest(Action.Types.GET_TOPICS, function * ({payload}){
           const result = yield call(API.getTopics, payload);
           if(!_.isEmpty(result.data)) {
               yield put(Action.Creators.setTopics(result.data))
           }
        }),

        takeLatest(Action.Types.GET_TOPICS_BY_SLUG, function *({slug}) {
           const result = yield call(API.getTopicBySlug, slug)
            if(!_.isEmpty(result.data)) {
                yield put(Action.Creators.setTopicBySlug(result.data))
            }
        })

    ])
}