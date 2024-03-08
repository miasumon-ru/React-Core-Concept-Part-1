
export default function Book ({book}) {

    const {name, id , price} = book
    return(
        <div>
            <li> Book : {name} id : {id} price :{price} </li>
        </div>
    )

}