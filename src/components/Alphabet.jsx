export default function Alphabet({value}) {
    const style = {
        width : "40px",
        height : "40px",
        border: "1px solid #D7D7D7",
        color:" #1E1E1E",
        padding:"6px",
        borderRadius:"4px",
        cursor: "pointer"
    }
    return (
        <button style={style}>{value}</button>
    )
}