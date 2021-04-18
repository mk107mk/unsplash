import {takeLatest, all, call, put} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";


export const saga = function* () {
    yield all([
        takeLatest(Action.Types.SEARCH_PHOTOS, function* (action) {

            const result = yield call(API.searchPhotos, action.payload);
            console.log("@@ result", result)
            if (result.data) {
                yield put(Action.Creators.setSearchResults(result.data));
            }
        })
    ])
}