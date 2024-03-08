

export default function Singer ({singer}) {

    const {name, age , id} = singer

    console.log(singer)

    return(
        <div>
            <h3>singer : {name} </h3>
            <p>age : {age} </p>
            <p> id :  {id}</p>
        </div>
    )
}