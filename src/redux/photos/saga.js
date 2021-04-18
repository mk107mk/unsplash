import {call, put, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

export const saga = function*() {
    yield takeLatest(Action.Types.GET_PHOTOS, function*
        (action){
        const result= yield call(API.getPhotos);
        console.log("@@result",result);

        yield put(Action.Creators.setPhotos(result.data))

    })
}