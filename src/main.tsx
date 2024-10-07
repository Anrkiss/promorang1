import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import './index.css'

const root = document.getElementById('root')

if (!root) {
  console.error('Root element not found')
} else {
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <Auth0Provider
          domain="dev-hksnnv4nmqp48w3t.us.auth0.com"
          clientId="W5RBuTmNHktLKpULLlLOLRQwfdatt0l8"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>,
    )
  } catch (error) {
    console.error('Error rendering app:', error)
  }
}