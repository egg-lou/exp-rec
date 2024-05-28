import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  
  const check = async () => {
    let url = "http://localhost:3000/check"
    try {
      let response = await fetch(url)
      let responseData = await response.json()
      console.log(responseData)
    } catch(err) {
      console.log(err) 
    }
  }


  return (
    <div>
    <h1>API CALL</h1>
    <button onClick={check}>Click Me!</button>
    {data && (
      <div>
        <p>Status: {data.status}</p>
        <p>Code: {data.code}</p>
        <p>Title: {data.title}</p>
      </div>
    )}
 </div>
  )
}

export default App
