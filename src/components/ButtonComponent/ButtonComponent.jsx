import Button from './Button/Button'

import './styles.css'

const ButtonComponent = () => {
    const data=[
        {title:'RESTART IN SAME CATEGORY', bgColor:'#f5854c', textColor:'white', type:'restart'},
        {title:'SELECT NEW CATEGORY', bgColor:'white', textColor:'black', type:'new'},
    ]
    return (
        <div className="userAction_buttonContainer">
            {data.map(el=><Button key={el.title} data={el} />)}
        </div>
    )
}

export default ButtonComponent
