import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Loader from "react-loader-spinner"

import {getCatImages} from '../../redux/actions/catActions'
import {loaderContainer} from '../../utils/customCSS'
import './styles.css'

const CatCatagoryCard = ({catData}) => {
    const dispatch = useDispatch();
    const catCategoryImage = useSelector(state=>state.catCategoryImage)
    const {loading, catCategoryImageList} = catCategoryImage
    let imageURL = catCategoryImageList && catCategoryImageList.filter(el=>el[0].categories[0].id === catData.id)[0][0].url

    const getSelectedCategoryImages = () => dispatch(getCatImages(catData))
    return (
        <div className="card__container">
        {
        loading ? <div style={loaderContainer()} className="card_categoryImageContainer">
        <Loader type="Watch" color="#00BFFF" height={40} width={40}/>
        </div>
        :
        catCategoryImageList && (
            <Link to='/cats' onClick={()=> getSelectedCategoryImages()}>
                <div className="card_categoryImageContainer" style={{backgroundImage:`url(${imageURL})`}}>
                    <p className="card__categoryName">{catData.name}</p>
                </div>
            </Link>
        )}
        </div>
    )
}

export default CatCatagoryCard
