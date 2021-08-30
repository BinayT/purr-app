import {ReactComponent as Pet} from '../../assets/Pet.svg'
import {ReactComponent as DontPet} from '../../assets/DontPet.svg'
import {ReactComponent as Skip} from '../../assets/Skip.svg'
import {PET, DONTPET, SKIP} from '../../redux/constants/userConstants'

import ActionIcon from './ActionIcon/ActionIcon'

import './styles.css'

const ActionsButton = ({setCatIndex}) => {
    const data = [
        {action: DONTPET, color:'red', component: <DontPet />, title:"Don't pet it!"},
        {action: SKIP, color:'grey', component: <Skip />, title:"Skip it!"},
        {action: PET, color:'green', component: <Pet />, title:"Pet it!"},
    ]

    return (
        <div className="action__buttonContainer">
            {data.map(el=> <ActionIcon key={el.color} data={el} setCatIndex={setCatIndex}>
                {el.component}
                </ActionIcon>
            )
            }
        </div>
    )
}

export default ActionsButton
