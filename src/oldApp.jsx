import Contact from "./assets/Contact"
import Counter from "./assets/Counter"
import Hello from "./assets/Hello"

function App() {
const helloData = [
  {name: "Kittiyaporn", message: 'Hi there'},
  {name: "Tom", message: 'Hi there'}
]

  return (
    <div className="App">
      <Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message}/>
      ))}

      <Contact email="Kittiyaporn044@gmail.com" phone="0928066393"/>
    </div>
  )
}

export default App
