import './App.css'
import ListTitleComponent from './components/ListTitleComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import TitleComponent from './components/TitleComponent'
import ListJobComponent from './components/ListJobComponent'
import JobComponent from './components/JobComponent'
import Home from './components/Home'
import ListPositionComponent from './components/ListPositionComponent'
import PositionComponent from './components/PositionComponent'
import ListStageComponent from './components/ListStageComponent'
import StageComponent from './components/StageComponent'
import ListLocationComponent from './components/ListLocationComponent'
import LocationComponent from './components/LocationComponent'
import RegisterComponent from './components/RegisterComponent'
import LoginComponent from './components/LoginComponent'
import { isUserLoggedIn } from './services/AuthService'


function App() {

  function AuthenticatedRoute({children}){
    const isAuth = isUserLoggedIn();

    if(isAuth){
      return children;
    }
    return <Navigate to='/login'/>
  }

  return (
    <div className='bg-image'>
    
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          {/* http://localhost:8080 */}
          <Route path='/' element={<Home />}></Route>

          {/* http://localhost:3000/titles */}
          <Route path='/titles' element={<AuthenticatedRoute><ListTitleComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/add-title */}
          <Route path='/add-title' element={<AuthenticatedRoute><TitleComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/update-title */}
          <Route path='/update-title/:id' element={<AuthenticatedRoute><TitleComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/jobs */}
          <Route path='/jobs' element={<AuthenticatedRoute><ListJobComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/add-job */}
          <Route path='/add-job' element={<AuthenticatedRoute><JobComponent /></AuthenticatedRoute>}></Route>
          {/* http://localhost:3000/edit-job */}
          <Route path='/edit-job/:id' element={<AuthenticatedRoute><JobComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/positions */}
          <Route path='/positions' element={<AuthenticatedRoute><ListPositionComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/add-position */}
          <Route path='/add-position' element={<AuthenticatedRoute><PositionComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/update-position */ }
          <Route path='/update-position/:id' element={<AuthenticatedRoute><PositionComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/stages */ }
          <Route path='/stages' element={<AuthenticatedRoute><ListStageComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/add-stage */ }
          <Route path='/add-stage' element = {<AuthenticatedRoute><StageComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/update-stage */ }
          <Route path='/update-stage/:id' element={<AuthenticatedRoute><StageComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/locations */ }
          <Route path='/locations' element = {<AuthenticatedRoute><ListLocationComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/add-location */ }
          <Route path='/add-location' element = {<AuthenticatedRoute><LocationComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/update-location */ }
          <Route path='/update-location/:id' element={<AuthenticatedRoute><LocationComponent /></AuthenticatedRoute>}></Route>

          {/* http://localhost:3000/register */ }
          <Route path='/register' element = {<RegisterComponent />}></Route>

          {/* http://localhost:3000/login */ }
          <Route path='/login' element = {<LoginComponent />}></Route>


        </Routes>
      <FooterComponent />
    </BrowserRouter>
    </div>
  )
}

export default App
