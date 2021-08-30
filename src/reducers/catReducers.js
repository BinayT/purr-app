import {
    CAT_CATEGORIES_REQUEST,
    CAT_CATEGORIES_SUCCESS,
    CAT_CATEGORIES_FAIL,
    CAT_CATEGORY_IMAGE_REQUEST,
    CAT_CATEGORY_IMAGE_SUCCESS,
    CAT_IMAGES_REQUEST,
    CAT_IMAGES_SUCCESS,
    CAT_IMAGES_FAIL,
    REMOVE_CAT_IMAGES,
    SET_SELECTED_CATEGORY,
    REMOVE_SELECTED_CATEGORY
} from '../constants/catConstants'

export const catCategoriesReducer = (state={}, action) => {
    switch (action.type) {
        case CAT_CATEGORIES_REQUEST:
            return {loading:true}
        case CAT_CATEGORIES_SUCCESS:
            return {loading:false, catCatagoriesList: action.payload}
        case CAT_CATEGORIES_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state;
    }
}

export const catCategoryImageReducer = (state={}, action) =>{
    switch (action.type) {
        case CAT_CATEGORY_IMAGE_REQUEST:
            return {loading:true}
        case CAT_CATEGORY_IMAGE_SUCCESS:
            return {loading:false, catCategoryImageList: action.payload}
        default:
            return state;
    }
}

export const catImagesReducer = (state={}, action) => {
    switch (action.type) {
        case CAT_IMAGES_REQUEST:
            return {loading:true}
        case CAT_IMAGES_SUCCESS:
            return {loading:false, catImagesList: action.payload}
        case CAT_IMAGES_FAIL:
            return {loading:false, error: action.payload}
        case REMOVE_CAT_IMAGES:
            return {}
        default:
            return state;
    }
}

export const currentSelectedCategory = (state={}, action) => {
    switch(action.type) {
        case SET_SELECTED_CATEGORY:
            return {categoryID: action.payload.id, categoryName : action.payload.name}
        case REMOVE_SELECTED_CATEGORY:
            return {}
        default:
            return state;
    }
}