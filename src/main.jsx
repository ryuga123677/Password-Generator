import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function sum(prop)
{
  return 8
}
function Simple()
{
  return <div></div>
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
console.log(<sum/>)
