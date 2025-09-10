import { useState } from 'react'
import { Sun, Moon, User, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from './ui/utils'

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
  darkMode: boolean
  onDarkModeToggle: () => void
}

export function Navigation({ activeTab, onTabChange, darkMode, onDarkModeToggle }: NavigationProps) {
  const tabs = [
    { id: 'home', label: 'Dashboard' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'insights', label: 'Insight Engine' },
    { id: 'scenarios', label: 'What-If Scenarios' },
    { id: 'reports', label: 'Reports' }
  ]

  return (
    <header className="glass rounded-2xl m-4 p-4 relative z-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg gradient-eco flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="white"/>
            </svg>
          </div>
          <h1 className="text-xl gradient-eco bg-clip-text text-transparent font-medium">
            Cross-Correlation Environmental Analyst
          </h1>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-1">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              className={cn(
                "relative px-4 py-2 rounded-full transition-all duration-300",
                activeTab === tab.id 
                  ? "bg-primary text-white shadow-lg" 
                  : "hover:bg-primary/10 text-foreground"
              )}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-highlight rounded-full" />
              )}
            </Button>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onDarkModeToggle}
            className="rounded-full w-10 h-10 p-0"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 text-highlight" />
            ) : (
              <Moon className="h-4 w-4 text-primary" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full w-10 h-10 p-0"
          >
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}