const initialSate = {
    list: [],
    photoPopup: false,
    photoDetail:{}
}


export const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',
        GET_PHOTOS: "photos/GET_PHOTOS",
        SET_PHOTOS: "photos/SET_PHOTOS",
        GET_PHOTO_BY_ID: "photos/GET_PHOTO_BY_ID",
        SET_PHOTO_BY_ID: "photos/SET_PHOTO_BY_ID",
        SET_PHOTO_RELATED: "photos/SET_PHOTO_RELATED",
    },
    Creators: {

        updateState: (payload)=> ({
            type:Action.Types.UPDATE_STATE,
            payload
        }),
        getPhotos: (payload) => {
            return {
                type: Action.Types.GET_PHOTOS,
                payload
            }
        },
        setPhotos: (payload) => {
            return {
                type: Action.Types.SET_PHOTOS,
                payload
            }
        },
        getPhotoById: (payload) => ({
            type: Action.Types.GET_PHOTO_BY_ID,
            payload
        }),
        setPhotoById: (payload) => ({
            type: Action.Types.SET_PHOTO_BY_ID,
            payload
        }),
        setPhotoRelated: (payload) => ({
            type: Action.Types.SET_PHOTO_RELATED,
            payload
        }),



    }
}

export const reducer = (state = initialSate, action) => {
    switch (action.type) {
        default:
            return state;

        case Action.Types.UPDATE_STATE:{
            return{
                ...state,
                ...action.payload
            }
        }

        case Action.Types.SET_PHOTOS : {
            return {
                ...state,
                list: action.payload
            }
        }

        case Action.Types.SET_PHOTO_BY_ID : {
            return {
                ...state,
                photoDetail:action.payload
            }
        }
        case Action.Types.SET_PHOTO_RELATED : {
            return {
                ...state,
                photoRelated:action.payload
            }
        }

    }
}