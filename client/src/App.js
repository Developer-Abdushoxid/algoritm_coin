import { Routes, Route,Navigate } from 'react-router-dom';
import {useSelector } from 'react-redux';
import { HomePage, Login, Register} from "./components";



const App = () => {

  const {user} = useSelector(state => state.auth);

  return (
        <div className='flex items-center justify-center h-screen'>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={user ? <Navigate to="/"/> : <Navigate to="/login"/>}/>
          </Routes>
        </div>
  )
}

export default App