import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Layout } from './Layout.jsx';



// const router = createBrowserRouter([
//   {

//     path: "/",
//     element: <Layout/>,

//   },

//   {
//     path: "/generate",
//     element: <QrCodeGenerator/>
//   },

//   {
//   path: "/scan",
//     element: <QrCodeScanner/>
//   },

// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} */}
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
)
 