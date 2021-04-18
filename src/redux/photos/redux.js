const initialSate ={
    list: []
}


export const Action = {
    Types:{
        GET_PHOTOS: "photos/GET_PHOTOS",
        SET_PHOTOS: "photos/SET_PHOTOS",
    },
    Creators:{
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
        }

    }
}

export const reducer = (state = initialSate, action) => {
    switch(action.type){
        default: return state;

        case Action.Types.SET_PHOTOS : {
            return {
                ...state,
                list: action.payload
            }
        }

    }
}