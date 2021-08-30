import {useDispatch} from 'react-redux'

import {setUserResponse} from '../../../redux/actions/userActions'
import {customTextColorCSS, customBorderCSS} from '../../../utils/customCSS'
import './styles.css'

const ActionIcon = ({data, children, setCatIndex}) => {
    const {color} = data
    const dispatch = useDispatch()

    const dispatchUserResponse = (data) => {
        setCatIndex(prevIndex => prevIndex +1)
        dispatch(setUserResponse(data))
    }

    return (
        <div className="actionIcon__button" onClick={()=>setCatIndex && dispatchUserResponse(data.action)}>
            <div className="action__iconContainer">
                <div className="action__icon" style={customBorderCSS(color)}>
                    {children} 
                </div>
            </div>
            {data.title && <p className="action__name" style={customTextColorCSS(color)}>{data.title}</p>}
        </div>
      )  
}

export default ActionIcon
