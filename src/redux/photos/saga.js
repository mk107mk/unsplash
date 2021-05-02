import {call, put, takeLatest, all} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

export const saga = function* () {
    yield all([
            takeLatest(Action.Types.GET_PHOTOS, function* (action) {
                const result = yield call(API.getPhotos);
                console.log("@@result", result);

                yield put(Action.Creators.setPhotos(result.data))

            }),
            takeLatest(Action.Types.GET_PHOTO_BY_ID, function*({payload}){
                const [photoResult, photoRelatedResult] = yield all([call (API.getPhotoById, payload),call (API.getPhotoRelated, payload)])

                if(photoResult.data){
                    yield put(Action.Creators.setPhotoById(photoResult.data));
                    yield put(Action.Creators.setPhotoRelated(photoRelatedResult.data));
                }
            })
        ]
    )

}