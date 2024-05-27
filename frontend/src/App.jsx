import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Add_Students from './add_student'
import Students from './students'
import Update from './update'
import Nav from './nav'

function App() {
  return(
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={ <Students /> } > </Route>
        <Route path="/add_records" element={ <Add_Students /> } > </Route>
        <Route path="/delete" element={ <students /> } > </Route>
        <Route path="/update/:id" element={ <Update /> } > </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
