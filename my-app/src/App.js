import React, { useState } from 'react'

// const App = () => {
//     return (
//         <div>
//             Hello John
//         </div>
//     )
// }



// const App = () => {
//     const name = 'John John'
//     return (
//         <div>Hi {name}</div>
//     )
// }



// const App = () => {
//     const [count, setCount] = useState(0)

//     const increment = () => {
//         setCount(count + 1)
//     }

//     return (
//         <>   
//             <div>
//                 Count: {count}
//             </div>
//             <button onClick={increment}>increment</button>
//         </>
//     )
// }



// const App = () => {
//     const [count, setCount] = useState(0)
//     const [user, setUser] = useState('')

//     const increment = () => {
//         setCount(count + 1)
//     }

//     const handleOnChange = (element) => {
//         setUser(element.target.value)
//     }
//     console.log("user: ", user)

//     return (
//         <>   
//             <div>Count: {count}</div>
//             <button onClick={increment}>increment</button>
//             <br />
//             <input name="user" onChange={handleOnChange} value={user} />
//         </>
//     )
// }



/* Styles */
import './App.css'

/* Components */
import Card from './Card'

const App = () => {
return (
    <div className="app-main">
    <Card name="john" age={23} gender="Male" title="Daddy"/>
    <Card name="Erika" age={23} gender="Female" title="Mommy"/>
    <Card name="alvin" age={4} gender="Female" title="Brothers"/>
    <Card name="joshua" age={26} gender="Male" title="Idol"/>
    </div>
)
}


export default App