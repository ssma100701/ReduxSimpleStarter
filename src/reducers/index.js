import { combineReducers } from 'redux';
import BooksReducer from './reduceer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
