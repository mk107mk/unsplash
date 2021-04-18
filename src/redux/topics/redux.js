const initialState = {
    list: [],
    detail:{}
}


export const Action = {
    Types: {
        GET_TOPICS: '/topics/GET_TOPICS',
        SET_TOPICS: '/topics/SET_TOPICS',
        GET_TOPICS_BY_SLUG: '/topic/GET_TOPIC_BY_SLUG',
        SET_TOPICS_BY_SLUG: '/topic/SET_TOPIC_BY_SLUG',
    },
    Creators: {
        getTopics: (payload) => ({
            type: Action.Types.GET_TOPICS,
            payload
        }),
        setTopics: (payload) => ({
            type: Action.Types.SET_TOPICS,
            payload
        }),
        getTopicBySlug: (slug) => ({
            type: Action.Types.GET_TOPICS_BY_SLUG,
            slug
        }),
        setTopicBySlug: (payload) => ({
            type: Action.Types.SET_TOPICS_BY_SLUG,
            payload
        })
    }

}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        case Action.Types.SET_TOPICS :
            return {
                ...state,
                list: action.payload
            }
        case Action.Types.SET_TOPICS_BY_SLUG :
            return {
                ...state,
                detail: action.payload
            }
    }
}