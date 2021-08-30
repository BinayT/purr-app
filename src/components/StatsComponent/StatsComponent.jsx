import {useSelector} from 'react-redux'

import StatsBox from './StatsBox/StatsBox'
import {ReactComponent as Pet} from '../../assets/Pet.svg'
import {ReactComponent as DontPet} from '../../assets/DontPet.svg'
import {ReactComponent as Skip} from '../../assets/Skip.svg'
import './styles.css'

const StatsComponent = () => {
    const userStats = useSelector(state=>state.userStats)
    const {pet,dontPet, skip} = userStats

    const statsData = [
        {color:'red', component: <DontPet />, count:dontPet, text:"didn't pet"},
        {color:'grey', component: <Skip />, count:skip, text:"skipped"},
        {color:'green', component: <Pet />, count:pet, text:"petted"},
    ]
    
    return (
        <div className="statsBox__container">
            {statsData.map(el=><StatsBox statsData={el} key={el.color} />)}
        </div>
    )
}

export default StatsComponent
