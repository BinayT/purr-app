import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "react-loader-spinner";

import CatCatagoryCard from '../../components/CatCategoryCard/CatCatagoryCard'
import {getCatCategories} from '../../redux/actions/catActions'
import {REMOVE_CAT_IMAGES, REMOVE_SELECTED_CATEGORY} from '../../redux/constants/catConstants'
import {RESET_USERSTATS} from '../../redux/constants/userConstants'
import {loaderContainer} from '../../utils/customCSS'
import './styles.css'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const catImages = useSelector(state=>state.catImages);
    const userStats = useSelector(state=>state.userStats);

    useEffect(()=>{
        // Checks if catCategories already exists or not, if not fetches cat categories from API.
        Object.keys(catCategories).length === 0 && dispatch(getCatCategories())

        // Cleans up cat datas when user returns after choosing a category.
        if(Object.keys(catImages).length !== 0){
            dispatch({type: REMOVE_CAT_IMAGES})
            dispatch({type: REMOVE_SELECTED_CATEGORY})
        }
    })

    useEffect(()=>{
        // Checks if user already started taking actions or not and does cleanup if they have, otherwise won't.
        const userStatsValues = Object.values(userStats).every(el=>el===0)
        !userStatsValues && dispatch({type: RESET_USERSTATS})
    })
    
    const catCategories = useSelector(state=>state.catCategories);
    const {loading, catCatagoriesList, error} = catCategories;
    return (
        <div className="container">
            <p className="container__title">Select a category</p>
            {
            loading ? <div style={loaderContainer()}><Loader type="ThreeDots" color="#00BFFF" height={80} width={80}/></div> : 
            error ? <p>Something went wrong</p> :
            catCatagoriesList && catCatagoriesList.map(el=><CatCatagoryCard catData={el} key={el.id} />)  
            }
        </div>
    )
}

export default HomeScreen
