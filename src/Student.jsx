

export default function Student ({grade=1 , score=0}) {
    return(
        <div className="student">
            <h3> this is student : </h3>
            <p>score : {score} </p>
            <p> grade  : {grade} </p>
        </div>
        
    )
}