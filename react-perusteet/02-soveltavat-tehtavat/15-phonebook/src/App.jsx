import { useEffect, useState } from 'react'
import axios from 'axios'

const Person = ({ person }) => {
  return <li>{person.name} {person.phoneNumber}</li>
}

const Filter =({filterText, handleFilterTextChange}) =>{
  return (
    <div>
        filter shown with: <input value={filterText} onChange={handleFilterTextChange}/>
    </div>
  )
}

const PersonForm = ({addPerson,newName,handleNameChange,newPhoneNumber,handlePhoneNumberChange}) => {
  return (
    <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newPhoneNumber} onChange={handlePhoneNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const PersonsList = ({persons})=>{
  return (
    <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} />
        ))}
    </ul>
  )
}


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  /*useEffect to load initial data from the server*/
  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
    .then(response =>{
      setPersons(response.data)
    })
    .catch(error => {
      console.log('Error fetching data:', error)
    })
  }, [])
  
  const addPerson = (event) => {
    event.preventDefault()
    /*do not add an empty name*/ 
    if (!newName.trim() || !newPhoneNumber.trim()) {
      alert(`You can not leave empty fields`)
      return
    }

    const existingPerson = persons.find(person=>person.name===newName)
    if(existingPerson){
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: String(persons.length + 1),
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewPhoneNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleFilterTextChange = (event) =>{
    setFilterText(event.target.value)
  }

  const personsToShow = persons.filter(person=> 
    person.name.toLowerCase().includes(filterText.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterText={filterText} handleFilterTextChange={handleFilterTextChange}/>
      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhoneNumber={newPhoneNumber}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <h2>Numbers</h2>
      <PersonsList persons={personsToShow}/>
    </div>
  )
}

export default App
