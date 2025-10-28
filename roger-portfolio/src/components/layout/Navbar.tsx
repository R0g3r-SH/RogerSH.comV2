import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, User, Rocket, Trophy, Mail } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/projects', icon: Rocket, label: 'Projects' },
    { path: '/awards', icon: Trophy, label: 'Awards' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-xl font-bold gradient-text">
              Roger SH
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-primary/20 border-b-2 border-primary'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transform transition-all ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-white transform transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:hidden glass-effect rounded-lg mt-2 py-2"
          >
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-primary/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </div>
                </Link>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar