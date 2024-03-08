import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'
import Student from './Student'
import Developer from './Developer'
import Device from './Device'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {

const actors = ['sakib khan', 'jasim', 'rubel khan']
 
const singers = [
  {name : 'mahfuzur rahman', age : 58, id : 1},
  {name : 'eva rahman', age : 38, id : 2},
  {name : 'shuvro deb', age : 48, id : 3},
  {name : 'pritom', age : 28, id : 4}


]

const books = [
  {id : 1 , name : 'physics', price : 100},
  {id : 2 , name : 'biology', price : 120},
  {id : 3 , name : 'chemistry', price : 130},
  {id : 4 , name : 'biology', price : 150},
]

  return (



    <>
    
           <h1>Vite + React</h1>

           <BookStore books = {books}></BookStore>

           {/* {
            singers.map(singer => <Singer singer={singer}></Singer>)
           } */}



           

           {/* {
            actors.map(actor => <Actor name= {actor}></Actor>)
           } */}


           {/* <Actor name= 'baappa raaj'></Actor> */}

           {/* <Todo task = "react" isDone = {true}></Todo>

           <Todo task = "Explore react core concept" isDone = {true}></Todo>

           <Todo task = "try jsx" isDone = {false}></Todo> */}

           {/* <Device name ='laptop' price='55' ></Device>
           <Device name ='mobile' price='11' ></Device>
           <Device name ='camera' price='35' ></Device> */}



           {/* <Person></Person> */}
           <Student grade = ' 7' score = '99'></Student> 
           {/* <Developer></Developer>    
           <Developer></Developer>     */}
     
    </>
  )
}

export default App

// how to build a component

/**
 * 1 > export the component
 * 2 > define the function
 * 3 > add  the markUp ( called jsx > javascript xml)
 */
