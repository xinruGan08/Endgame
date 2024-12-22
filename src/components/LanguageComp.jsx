export default function Language({name,backgroundColor,color}){
    const style = {
        backgroundColor: backgroundColor,
        color:color,
        padding: '4.5px',
        borderRadius: '3px',
        height:'24.75px',
        display:'flex',
        alignItems:'center'
    }


    

    return(
    <div className="language-comp" style={style}>
        <p>{name}</p>
    </div>
    )
}