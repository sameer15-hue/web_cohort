import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './Store_counter.jsx'
import App from './App.jsx'
import './index.css'
import Sample from './Sample.jsx'
createRoot(document.getElementById('root')).render(
    <Sample/>
  ,
)
