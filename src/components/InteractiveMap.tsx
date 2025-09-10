import { useState } from 'react'
import { motion } from 'motion/react'
import { Filter, Calendar, Database, AlertTriangle, Search, Plus, Minus, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Switch } from './ui/switch'
import { Slider } from './ui/slider'
import { Badge } from './ui/badge'

export function InteractiveMap() {
  const [timeRange, setTimeRange] = useState([2010])
  const [layers, setLayers] = useState([
    { name: "Air", icon: "🌬️", active: true, color: "bg-blue-400" },
    { name: "Water", icon: "💧", active: true, color: "bg-cyan-400" },
    { name: "Biodiversity", icon: "🌿", active: true, color: "bg-green-400" },
    { name: "Demographics", icon: "👥", active: false, color: "bg-purple-400" }
  ])

  const toggleLayer = (index: number) => {
    setLayers(layers.map((layer, i) => 
      i === index ? { ...layer, active: !layer.active } : layer
    ))
  }

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Sidebar Controls */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="col-span-3 space-y-6"
      >
        {/* Filters */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-lg">
              <Filter className="h-5 w-5 text-secondary" />
              <span>Filters</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-secondary">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Date Range</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-secondary">
                <Database className="h-4 w-4" />
                <span className="text-sm">Data Type</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-secondary">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm">Severity Level</span>
              </div>
            </div>

            <div className="space-y-2">
              <Search className="h-4 w-4 text-secondary" />
              <Input 
                placeholder="Search location..." 
                className="glass border-secondary/20"
              />
            </div>
          </CardContent>
        </Card>

        {/* Layer Controls */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="text-lg">Layer Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {layers.map((layer, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{layer.icon}</span>
                  <span className="text-sm">{layer.name}</span>
                </div>
                <Switch
                  checked={layer.active}
                  onCheckedChange={() => toggleLayer(index)}
                  className="data-[state=checked]:bg-secondary"
                />
              </div>
            ))}

            {/* Risk Level Indicator */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>Low Risk</span>
                <span>Moderate</span>
                <span>High</span>
              </div>
              <div className="h-2 bg-gradient-to-r from-primary via-coral to-red-500 rounded-full" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Main Map Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="col-span-9"
      >
        <Card className="glass border-0 h-full">
          <CardContent className="p-6">
            <div className="relative h-[600px] bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl overflow-hidden">
              {/* Map representation with colored regions */}
              <div className="absolute inset-0">
                {/* North America */}
                <div className="absolute top-1/4 left-1/4 w-24 h-20 bg-green-400/60 rounded-lg"></div>
                {/* Europe */}
                <div className="absolute top-1/3 left-1/2 w-16 h-12 bg-blue-400/60 rounded-lg"></div>
                {/* Asia */}
                <div className="absolute top-1/4 right-1/4 w-32 h-24 bg-yellow-400/60 rounded-lg"></div>
                {/* Africa */}
                <div className="absolute top-1/2 left-1/2 w-20 h-24 bg-green-500/60 rounded-lg"></div>
                {/* South America */}
                <div className="absolute bottom-1/4 left-1/3 w-16 h-20 bg-orange-400/60 rounded-lg"></div>
                {/* Australia */}
                <div className="absolute bottom-1/3 right-1/4 w-16 h-12 bg-purple-400/60 rounded-lg"></div>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button size="sm" className="w-10 h-10 p-0 glass">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="sm" className="w-10 h-10 p-0 glass">
                  <Minus className="h-4 w-4" />
                </Button>
              </div>

              {/* Floating Chatbot Button on Map */}
              <div className="absolute bottom-6 right-6">
                <Button className="rounded-full w-12 h-12 p-0 gradient-eco shadow-lg">
                  <Zap className="h-5 w-5 text-white" />
                </Button>
              </div>

              {/* Time Slider */}
              <div className="absolute bottom-6 left-6 right-20 glass rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">1990</span>
                  <div className="flex-1">
                    <Slider
                      value={timeRange}
                      onValueChange={setTimeRange}
                      max={2023}
                      min={1990}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <span className="text-sm font-medium">2023</span>
                </div>
                <div className="flex justify-center mt-2">
                  <Badge variant="secondary" className="text-xs">
                    Current: {timeRange[0]}
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}