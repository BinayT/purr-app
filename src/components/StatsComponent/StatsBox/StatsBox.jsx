import './styles.css'
import ActionIcon from '../../ActionsButton/ActionIcon/ActionIcon'

const StatsBox = ({statsData}) => {
    const {color, component, count, text} = statsData
    const colorForAction = {color}

    return (
        <div className="stats__box">
            <ActionIcon data={colorForAction}>{component}</ActionIcon>
            <div className="stats__info">
                <p style={{color:color}} className="stats__count">{count}</p>
                <p className="stats__actionText">Cats you {text}</p>
            </div>
        </div>
    )
}

export default StatsBox
