// create your App component here
import React,{useState,useEffect} from "react"
function App(){
    const[dogs, setDogs]= useState("")
    const[isLoaded, setLoaded]= useState(false)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setDogs(data.message)
            setLoaded(true)
        })
    },[]);
    console.log(dogs)
    if(!isLoaded)return<p>Loading...</p>
return(
    <div>
        <img src={dogs} alt="A Random Dog"></img>
    </div>
)
}
export default App
