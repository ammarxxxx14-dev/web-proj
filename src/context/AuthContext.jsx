import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check initial session
    const checkSession = async () => {
      if (!supabase) {
        setLoading(false)
        return
      }
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }

    checkSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase?.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    ) || { data: { subscription: null } }

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  const signup = (email, password) => supabase?.auth.signUp({ email, password }) || Promise.resolve({ error: { message: 'Supabase not configured' } })
  const login = (email, password) => supabase?.auth.signInWithPassword({ email, password }) || Promise.resolve({ error: { message: 'Supabase not configured' } })
  const logout = () => supabase?.auth.signOut() || Promise.resolve()

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
