import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

type AuthContextType = {
  isAuthenticated: boolean
  user: any
  loginWithRedirect: () => void
  logout: () => void
  isLoading: boolean
  error: Error | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    isAuthenticated,
    user,
    loginWithRedirect,
    logout,
    isLoading,
    error
  } = useAuth0()

  const [authError, setAuthError] = useState<Error | null>(null)

  useEffect(() => {
    if (error) {
      console.error('Auth0 error:', error)
      setAuthError(error)
    }
  }, [error])

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      user, 
      loginWithRedirect, 
      logout,
      isLoading,
      error: authError
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}