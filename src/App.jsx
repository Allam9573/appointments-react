import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Especialidades } from './pages/Especialidades'
import { Citas } from './pages/Citas'
import { Error } from './pages/Error'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/especialidades' element={<Especialidades />} />
            <Route path='/citas' element={<Citas />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
