import { useEffect, useState } from 'react'
import personServices  from './services/persons'

const Person = ({ person, removePerson }) => {
  return (
  <li>
  {person.name} {person.phoneNumber} 
  <button onClick={() => removePerson(person.id)}>delete</button>
  </li>
)}

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

const PersonsList = ({persons, removePerson})=>{
  return (
    <ul>
        {persons.map((person) => (
          <Person key={person.id} person={person} removePerson={removePerson} />
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
    personServices
    .getAll()
    .then(initialPersons => {setPersons(initialPersons)})
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
      if (window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)){
        const updatedPerson = {...existingPerson, phoneNumber: newPhoneNumber}
      
      personServices
        .update(existingPerson.id , updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson))
          setNewName('')
          setNewPhoneNumber('')
        })
        .catch(error => {
          console.error("Error updating person:", error)
        })
      } 
      return
    }

    const personObject = {
      name: newName,
      phoneNumber: newPhoneNumber,
      id: String(persons.length + 1),
    }
    
    personServices
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewPhoneNumber('')
      })
  }

  const removePerson = (id) =>{
    /* Find a person by id */
    const person = persons.find(person => person.id === id)
    /* Asking for confirmation from the user */
    if (window.confirm(`Delete ${person.name}?`)) {
        personServices
        .remove(id)
        .then(() => {
          /* Updating the status (create a new array without the deleted person) */
          setPersons(persons.filter(p=> p.id !== id))
        })
        .catch(error => {
          console.error("Error deleting person:", error)
        })
    }
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
      <PersonsList persons={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App
