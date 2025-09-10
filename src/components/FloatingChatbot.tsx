import { useState } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { motion, AnimatePresence } from 'motion/react'

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSend = () => {
    if (message.trim()) {
      // Here you would handle sending the message
      console.log('Sending message:', message)
      setMessage('')
    }
  }

  return (
    <>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 h-96 glass rounded-2xl p-4 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full gradient-eco flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.54 0 3-.36 4.29-1.01L22 22l-1.01-5.71C21.64 15 22 13.54 22 12c0-5.52-4.48-10-10-10z" fill="white"/>
                  </svg>
                </div>
                <h3 className="gradient-eco bg-clip-text text-transparent">EcoBot Assistant</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleChat}
                className="rounded-full w-8 h-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-3">
              <div className="bg-primary/10 rounded-lg p-3">
                <p className="text-sm">Hello! I'm your environmental analysis assistant. How can I help you explore correlations in environmental data today?</p>
              </div>
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                placeholder="Ask about environmental correlations..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 glass border-primary/20"
              />
              <Button
                onClick={handleSend}
                size="sm"
                className="gradient-eco rounded-lg px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button
          onClick={toggleChat}
          className="rounded-full w-14 h-14 p-0 gradient-eco shadow-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-primary/20 to-secondary/20" />
          <MessageCircle className="h-6 w-6 text-white relative z-10" />
        </Button>
      </motion.div>
    </>
  )
}