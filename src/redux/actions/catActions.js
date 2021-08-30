import axios from 'axios';

import {
    CAT_CATEGORIES_REQUEST,
    CAT_CATEGORIES_SUCCESS,
    CAT_CATEGORIES_FAIL,
    CAT_CATEGORY_IMAGE_REQUEST,
    CAT_CATEGORY_IMAGE_SUCCESS,
    CAT_IMAGES_REQUEST,
    CAT_IMAGES_SUCCESS,
    CAT_IMAGES_FAIL,
    SET_SELECTED_CATEGORY,
    REMOVE_CAT_IMAGES
} from '../constants/catConstants'
import {RESET_USERSTATS} from '../constants/userConstants'
import {baseURL, config, categoryImageFetcher} from '../../utils/apiUtils'

export const getCatCategories = () => async(dispatch) => {
    try {
        //Here I'm making requests to fetch all the available categories
        dispatch({type: CAT_CATEGORIES_REQUEST})
        const {data} = await axios.get(`${baseURL}/categories`, config)
        dispatch({type: CAT_CATEGORIES_SUCCESS, payload: data})

        //And here with the IDs from the categories, I'm making requests to fetch the images for each of the categories.
        const categoriesIDs = data.map(el=>el.id)
        dispatch({type:CAT_CATEGORY_IMAGE_REQUEST})
        
        let categoriesImages = await Promise.all(categoriesIDs.map(el=>categoryImageFetcher(el)));
        dispatch({type:CAT_CATEGORY_IMAGE_SUCCESS, payload:categoriesImages})
    } catch (error) {
        dispatch({type: CAT_CATEGORIES_FAIL, payload: error})
    }
}

export const getCatImages = (data) => async(dispatch) => {
    const params = {
        params:{
            category_ids: data.id,
            limit:10
        }
    }
    dispatch({type:SET_SELECTED_CATEGORY, payload:data})
    try {
        dispatch({type: CAT_IMAGES_REQUEST})
        const {data} = await axios.get(`${baseURL}/images/search`, params, config)
        dispatch({type: CAT_IMAGES_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type: CAT_IMAGES_FAIL, payload: error})
    }
}

export const restartSameCategory = () => (dispatch) => {
    dispatch({type:REMOVE_CAT_IMAGES})
    dispatch({type:RESET_USERSTATS})
}
