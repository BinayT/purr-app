import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Loader from "react-loader-spinner"

import ActionsButton from '../ActionsButton/ActionsButton'
import {loaderContainer} from '../../utils/customCSS'
import './styles.css'

const CatImageCard = ({history}) => {
    const dispatch = useDispatch()
    const [catIndex, setCatIndex] = useState(0)

    const catImages = useSelector(state=>state.catImages)
    const {loading, catImagesList} = catImages

    useEffect(()=>{
        if(catImagesList && !catImagesList[catIndex]){
            return history.push('/stats')
        }
    },[catImagesList, catIndex, history, dispatch])

    return (
        <>
            {
            loading? <div style={loaderContainer()} className="catAction__container">
                <Loader type="Watch" color="#00BFFF" height={50} width={50}/>
            </div>
            :
            catImagesList && catImagesList[catIndex] && (
            <div className="catAction__container">
                <div className="catAction__imageContainer" style={{backgroundImage: `url(${catImagesList[catIndex].url})`}}></div>
                <p className="catAction__Count">{`Cat ${catIndex+1}/10`}</p>
                <ActionsButton setCatIndex={setCatIndex} />
            </div>
        )
            }
        </>
    )
}

export default CatImageCard
