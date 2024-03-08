
export default function Developer () {

    // we can also write css style like an object

    const developerStyle = {
        margin : '20px',
        padding : '20px',
        border : '2px solid purple',
        borderRadius : '20px'
    }


    return (
        <div style={developerStyle}>
            <h5>devo devo </h5>
            <p>coding :</p>
        </div>
    )
}