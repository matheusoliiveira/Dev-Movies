import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'

import Router from './routes/routes.jsx'

import GlobalStyles from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyles />
  </StrictMode>,
)

export default Router
