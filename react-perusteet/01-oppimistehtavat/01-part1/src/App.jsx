const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}


const App = () => {
  console.log('Hello from component')
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a+b);
  const nimi = "Pekka"
  const ika = 10;
  return (
    <div>
      <h2>Ensin "Hello world" ja aika</h2>
      <p>Hello world, it is {now.toString()}</p>
      <h2>Sitten kahden muutujan yhteenlasku</h2>
      <p>{a} + {b} = {a + b}</p>
      <h2>Välitetään dataa kompponenttiin Hello</h2>
      <Hello name ={nimi} age ={ika} />
      <Hello name="Maija" age={26+10} />
    </div>
  )
}

export default App



