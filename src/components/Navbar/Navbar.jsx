import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {REMOVE_CAT_IMAGES, REMOVE_SELECTED_CATEGORY} from '../../redux/constants/catConstants'
import {ReactComponent as Logo} from '../../assets/Logo.svg'
import './styles.css'

const Navbar = () => {
    const dispatch = useDispatch()

    const cleanUpCategoryAndImages = () =>{
        dispatch({type:REMOVE_CAT_IMAGES})
        dispatch({type:REMOVE_SELECTED_CATEGORY})
    }

    return (
        <div className="navbar">
            <div className="navbar-logo" onClick={()=> cleanUpCategoryAndImages()}>
                <Link to="/"><Logo /></Link>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar
