import clsx from "clsx"

export default function Language({name,backgroundColor,color,isLost}){
    const style = {
        backgroundColor: backgroundColor,
        color:color,
        padding: '4.5px',
        borderRadius: '3px',
        height:'24.75px',
        display:'flex',
        alignItems:'center',
        overflow: 'hidden',
        position: 'relative'
    }

    return(
    <div className={`language-comp ${isLost?"lost":""}`} style={style}>
        <p>{name}</p>
    </div>
    )
}