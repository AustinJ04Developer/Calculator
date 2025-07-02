import './Display.css'

function Display({value}){
    return(
        <input type="text" id="display" value={value} readOnly/>
    )
}

export default Display;