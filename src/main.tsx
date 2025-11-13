import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeBage from './Pages/HomeBage'
import Home from './components/Home'
import DetailsBage from './components/DetailsBage'
import { ProjectProvider } from './components/ProjectContext'

let routes= createBrowserRouter([
  {
    path: '/',
    element:<HomeBage/>,
    children:[
      {
        path:'',
        element:<Home/>
      },{
        path:'details/:title',
        element:<DetailsBage/>

      }
    ]
  }

]
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectProvider>
      <RouterProvider router={routes}/>
    </ProjectProvider>
  </StrictMode>,
)
