import React from 'react'
import ReactDOM from 'react-dom/client'
import Heading from './App.jsx'
import Para from './para.jsx'
import Image from './img.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Heading/>
    <Para/>
    <Image/>
  </React.StrictMode>,
)
