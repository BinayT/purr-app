import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import {getCatImages, restartSameCategory} from '../../../redux/actions/catActions'
import {statsActionButton, customTextColorCSS} from '../../../utils/customCSS'

import './styles.css'

const Button = ({data}) => {
    const {title, textColor, bgColor, type} = data
    const dispatch = useDispatch();
    
    const {categoryID, categoryName} = useSelector(state=>state.selectedCategory)
    
    const repeatSameCategory = () => {
        dispatch(restartSameCategory())
        dispatch(getCatImages({id: categoryID, name:categoryName}))
    }
    
    const linkTo = type === 'restart' ? '/cats' : '/'
    return (
        <div 
        className="stats__button" 
        onClick={()=>type === 'restart' && categoryID && repeatSameCategory()}
        style={statsActionButton(bgColor, textColor)}>
            <Link to={linkTo} style={customTextColorCSS(textColor)}>{title}</Link>
        </div>
    )
}

export default Button
