import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  catCategoriesReducer, 
  catImagesReducer, 
  currentSelectedCategory, 
  catCategoryImageReducer} 
from './reducers/catReducers'
import {userStatsReducer} from './reducers/userReducers'

const reducer = combineReducers({
  catCategories: catCategoriesReducer,
  catCategoryImage: catCategoryImageReducer,
  catImages: catImagesReducer,
  selectedCategory: currentSelectedCategory,
  userStats: userStatsReducer
})

const initialState = {}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;