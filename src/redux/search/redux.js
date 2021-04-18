const initialSate ={

}

export const Action = {
    Types:{
        SEARCH_PHOTOS: "search/SEARCH_PHOTOS",
        SET_SEARCH_RESULTS: "search/SET_SEARCH_RESULTS",
    },
    Creators:{
        searchPhotos: (payload) => ({
            type: Action.Types.SEARCH_PHOTOS,
            payload
        }),

        setSearchResults: (payload) => ({
            type : Action.Types.SET_SEARCH_RESULTS,
            payload
        })
    }
}

export const reducer = (state = initialSate, action) => {
    console.log(action)
    switch(action.type){
        default: return state;

        case Action.Types.SET_SEARCH_RESULTS : {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}