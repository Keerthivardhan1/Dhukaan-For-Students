import Home from "./pages/Home"
import { Routes, Route} from 'react-router-dom'
import Item from "./pages/Item"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/item/:id" element= {<Item/>}> </Route>
      </Routes>
    </>
  )
}

export default App
