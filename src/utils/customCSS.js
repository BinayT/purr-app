export const customBorderCSS = (color) => {
    return {border: `1.5px solid ${color}`}
}

export const customTextColorCSS = (color) =>{
    return {color:`${color}`}
}

export const statsActionButton = (bgColor, textColor) =>{
    return {
        backgroundColor: bgColor,
        border: textColor === 'black' && `0.5px solid black`
    }
}

export const loaderContainer = () => {
    return {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}