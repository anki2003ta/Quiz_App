import './styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main1 from './components/Main1'
import Quiz from './components/Quiz'
import Result from './components/Result'
import { CheckUserExist } from './helper/helper';

const router=createBrowserRouter([
  {
    path: '/',
    element: <Main1></Main1>
  },
  {
    path: '/quiz',
    element: <CheckUserExist><Quiz></Quiz></CheckUserExist>
    
  },
  {
    path: '/result',
    element: <CheckUserExist><Result></Result></CheckUserExist>
    
  },
])
function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
      
       
    </>
  );
}

export default App
