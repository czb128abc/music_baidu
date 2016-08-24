import {combineReducers} from 'redux';
import todos from './todos';
import music from './music';
const rootReducer = combineReducers({
  todos: todos,
  music:music
});
export default rootReducer