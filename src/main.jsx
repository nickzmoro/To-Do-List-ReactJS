import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyles } from './globalStyles.js'

import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)