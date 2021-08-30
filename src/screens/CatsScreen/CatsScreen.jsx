import {useEffect} from 'react'
import { useSelector } from 'react-redux'

import {capitalize} from '../../utils/stringUtils'
import CatImageCard from '../../components/CatImageCard/CatImageCard'
import '../HomeScreen/styles.css'
import './styles.css'

const CatsScreen = ({history}) => {
    const selectedCategory = useSelector(state=>state.selectedCategory)
    const {categoryName} = selectedCategory
    
    const capitalizedCategoryName = categoryName && capitalize(categoryName)
    useEffect(()=>{
        !categoryName &&  history.push('/')
    })

    return (
        <div className="container">
            <p className="container__title container__categoryTitle">{`> ${capitalizedCategoryName}`}</p>
            <p className="cat__actionQuestion">Would you pet it?</p>
            <CatImageCard history={history} />
        </div>
    )
}

export default CatsScreen
