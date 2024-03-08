
export default function Todo ({task, isDone}) {

    let listItem;

    // conditional rendering

    // option 1 by if .. else


    // if(isDone === true){

    //     return <li> Task : {task} </li>

    // }
    // else{
    //     return <li> Work On  : {task}</li>
    // }


    
    // option 2


    // if(isDone){

    //           return <li> Task : {task} </li>

    // }
    // return  <li> Work On  : {task}</li>


    // option 3  by ternary operator

    // return <li> {isDone ? 'finished :' : 'work on : ' } {task}</li>


    // option 4 by && (and operator)

    // return <li> {isDone && 'done >>'} {task}</li>


    // option 5 >> || (or operator)

    // return <li>{isDone || 'work on '}</li>


    // option 6 >> by variable

    if(isDone){

        listItem = <li>finished : {task}</li>

    }
    else{
        listItem = <li> work on : {task}</li>

    }

    return listItem;

    // conditional rendering means >> shows the html on the basis of conditions

    /**
     * why conditional necessary 
     *  1 > improve user interface
     * 2 > improve performance 
     *  3 > simplified code
     * 4 > flexibility
     */

    
   
}