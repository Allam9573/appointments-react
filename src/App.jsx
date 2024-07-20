import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Especialidades } from './pages/Especialidades'
import { CitaItem } from './components/CitaItem'
import { Citas } from './pages/Citas'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/especialidades' element={<Especialidades />} />
            <Route path='/citas' element={<Citas />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
