import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Especialidades } from './pages/Especialidades'
import { CitaItem } from './components/CitaItem'
import { Citas } from './pages/Citas'
import { Error404 } from './pages/Error404'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/especialidades' element={<Especialidades />} />
            <Route path='/citas' element={<Citas />} />
            <Route path='*' element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
