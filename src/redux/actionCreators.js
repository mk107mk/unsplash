import store from "./store";
import {bindActionCreators} from 'redux';
import {Action as AppAction} from './app/redux';
import {Action as PhotosAction} from './photos/redux';
import {Action as SearchAction} from './search/redux';
import {Action as TopicsAction} from './topics/redux';


const dispatch  = store.dispatch;

export const appAction = bindActionCreators(AppAction.Creators, dispatch);
export const photosAction = bindActionCreators(PhotosAction.Creators, dispatch);
export const searchAction = bindActionCreators(SearchAction.Creators, dispatch);
export const topicAction = bindActionCreators(TopicsAction.Creators, dispatch);

