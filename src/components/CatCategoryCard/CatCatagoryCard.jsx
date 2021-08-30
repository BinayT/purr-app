import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import {getCatImages} from '../../redux/actions/catActions'
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
        loading ? <p>Loading...</p> :
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
