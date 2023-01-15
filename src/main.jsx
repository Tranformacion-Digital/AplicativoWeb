import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header'
import AppRouter from './AppRouter'
import '../src/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <AppRouter />
  </React.StrictMode>
)
