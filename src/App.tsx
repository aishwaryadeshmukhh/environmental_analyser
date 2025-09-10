import { useState, useEffect } from 'react'
import { Navigation } from './components/Navigation'
import { Dashboard } from './components/Dashboard'
import { Analytics } from './components/Analytics'
import { InsightEngine } from './components/InsightEngine'
import { ScenarioGenerator } from './components/ScenarioGenerator'
import { Reports } from './components/Reports'
import { FloatingChatbot } from './components/FloatingChatbot'
import { motion, AnimatePresence } from 'motion/react'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [darkMode, setDarkMode] = useState(false)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Dashboard />
      case 'analytics':
        return <Analytics />
      case 'insights':
        return <InsightEngine />
      case 'scenarios':
        return <ScenarioGenerator />
      case 'reports':
        return <Reports />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen relative">
      {/* Clean Professional Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900" />
      
      {/* Subtle animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation 
          activeTab={activeTab}
          onTabChange={setActiveTab}
          darkMode={darkMode}
          onDarkModeToggle={toggleDarkMode}
        />

        {/* Page Content */}
        <main className="px-6 pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Floating Chatbot */}
        <FloatingChatbot />
      </div>
    </div>
  )
}