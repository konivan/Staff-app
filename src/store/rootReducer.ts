import { combineReducers } from "redux";
import { stateReducer } from './state/reducers';
import { contentReducer } from './state/content-reducer';

const rootReducer = combineReducers({
  state: stateReducer,
  content: contentReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;