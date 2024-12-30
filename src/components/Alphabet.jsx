export default function Alphabet({handle,value,valid,isGameOver}) {

    const style = {
        width : "40px",
        height : "40px",
        border: "1px solid #D7D7D7",
        color:" #1E1E1E",
        padding:"6px",
        borderRadius:"4px",
        cursor: "pointer",
        backgroundColor: valid == 0?  "#FCBA29":
                         valid == 1? "#10A95B":
                         " #EC5D49"
    }
   
    return (
        <button style={style} disabled={isGameOver} 
        onClick={()=>handle(value) } aria-disabled={valid==-1}
        aria-label={`Letter ${value}`}>
            {value}</button>
    )
}