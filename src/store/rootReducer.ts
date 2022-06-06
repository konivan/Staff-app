import { combineReducers } from "redux";
import { contentReducer } from './state/content-reducer';

const rootReducer = combineReducers({
  content: contentReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;