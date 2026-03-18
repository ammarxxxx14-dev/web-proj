import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'
import { Mail, Lock, UserPlus, ArrowLeft } from 'lucide-react'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }

    setLoading(true)
    try {
      const { error } = await signup(email, password)
      if (error) throw error
      alert('Signup successful! Please check your email for confirmation.')
      navigate('/login')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center px-6">
      <Link to="/" className="fixed top-12 left-6 sm:left-12 flex items-center gap-2 text-(--text-secondary) hover:text-(--text-primary) transition-colors">
        <ArrowLeft className="w-5 h-5" />
        <span className="font-outfit uppercase tracking-widest text-sm">Back to Home</span>
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-10 md:p-12 rounded-4xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-display text-(--text-primary) mb-3">JOIN THE ELITE</h1>
          <p className="text-(--text-secondary) font-outfit">Create your account to start your journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-outfit text-center">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-(--text-secondary) font-medium ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-secondary) opacity-50" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-(--text-primary) font-outfit focus:outline-none focus:border-accent/40 transition-colors"
                placeholder="driver@v-app.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-(--text-secondary) font-medium ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-secondary) opacity-50" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-(--text-primary) font-outfit focus:outline-none focus:border-accent/40 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-(--text-secondary) font-medium ml-1">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--text-secondary) opacity-50" />
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-(--text-primary) font-outfit focus:outline-none focus:border-accent/40 transition-colors"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn-elite w-full py-4 text-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="flex items-center justify-center gap-3">
              {loading ? 'Creating Account...' : <><UserPlus className="w-5 h-5" /> Sign Up</>}
            </span>
          </button>
        </form>

        <div className="mt-8 text-center text-(--text-secondary) font-outfit">
          Already have an account? {' '}
          <Link to="/login" className="text-(--text-primary) hover:text-accent transition-colors">Sign In</Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Signup
