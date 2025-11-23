import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/** Traditional Array Syntax 
const animals = ["giraffe", "zebra", "bear"];
console.log(animals[0])
*/

/** JS Ecma Script Syntax 
const [firstAnimal, second, third] = ["giraffe", "zebra", "bear"];
console.log(firstAnimal + ", " + second + ", " + third);
const [, , thirdNum] = ["one", "two", "three"];
console.log(thirdNum);
*/

createRoot(document.getElementById('root')).render(
    <App />
)
