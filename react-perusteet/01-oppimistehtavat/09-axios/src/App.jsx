import React, { useEffect, useState } from "react"
import './index.css'
import axios from "axios"

const Button = ({handleClick, text})=>{
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Card = ({food})=>{
  return(
    <div className="food-card">
      <img src={food.imageUrl} alt={food.name} />
      <div className="food-info">
        <h3>{food.name}</h3>
        <p>{food.price ? `${food.price} €` : "Price not specified"}</p>
      </div>
    </div>
  )
}

const App = ()=>{
const [foods, setFoods] = useState([])
const [error, setError] = useState(null)

async function fetchFoods(){
  try{
    const apiResponse = await axios.get('/api/consumer-api/consumer-assortment/v1/venues/slug/mcdonalds-forum-katutaso/assortment',
    {
      headers: {
         'accept: application/json, text/plain, */*',
          'accept-language: en-GB,en-US;q=0.9,en;q=0.8,vi;q=0.7,fi;q=0.6,fr;q=0.5',
          'app-currency-format: McKgMjM0LDU2wqDCpA==',
          'app-language: fi',
          'client-version: 1.16.37',
          'clientversionnumber: 1.16.37',
          'origin: https://wolt.com',
          'platform: Web',
          'priority: u=1, i',
          'referer: https://wolt.com/',
          'w-wolt-session-id: 1f37d9af-4ee2-4363-a034-0acdb8c85c26',
          'x-wolt-web-clientid: a1cf5613-3786-4b06-a8c1-a34a1c8b2b8f'
        }
    })
    setFoods(apiResponse.data.items)
    console.log(apiResponse.data.items)
  }catch(error){
    console.log(error)
    setError('Failed to fetch data from server')
  }
}

useEffect(()=>{
  fetchFoods()
},[])

return (
    <div className="main-container">
      <h1>Menu</h1>
      {foods.map(({images,price,name})=>(
        <Card imageUrl={images[0].url} price={price} name={name} />
      ))}
    </div>
  )
}

export default App