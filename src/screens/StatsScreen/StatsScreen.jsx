import StatsComponent from '../../components/StatsComponent/StatsComponent'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'

import '../HomeScreen/styles.css'
import './styles.css'

const StatsScreen = () => {
    return (
        <div className="container">
            <p className="container__title stats__text">{'> Stats'}</p>
            <p className="container__title catsSeen__text">Cats seen: 10</p>
            <StatsComponent />
            <ButtonComponent />
        </div>
    )
}

export default StatsScreen
