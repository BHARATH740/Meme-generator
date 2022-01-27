import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <Header />
      <Meme />
      
    </div>
  );
}

export default App;




// import React from "react"
// import boxes from "./components/boxes"
// import Box from "./box"

// export default function App() {

//     function toggle(id){
//         console.log(id)
//         setboxesArray(prevboxesArray => {
//             return prevboxesArray.map(boxesArray => {
//                 return boxesArray.id === id ? {...boxesArray,on : !boxesArray.on} : boxesArray
//             })
//         })
//     }
   


//     const [boxesArray , setboxesArray] = React.useState(boxes) 
//     console.log(boxesArray)

//     const boxesElements = boxesArray.map(item => {
//       return <Box 
//         key = {item.id}
//         id = {item.id}
//         on= {item.on}
//         Toggle ={toggle} 
//         />
//     })
//     return (
//         <main>
//             <h1>Boxes will go here</h1>
//             {boxesElements}
//         </main>
//     )
// } 

