import { motion } from 'motion/react'
import { Upload, Database, TrendingUp, MapPin, Zap, BarChart3 } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts'

export function Dashboard() {
  const insightCards = [
    {
      title: "Water quality linked to air pollution spike in Region A",
      description: "Strong correlation detected",
      badge: "High Impact",
      badgeColor: "bg-coral text-white",
      icon: <TrendingUp className="h-5 w-5 text-coral" />
    },
    {
      title: "Deforestation correlates with reduced soil fertility in Amazon Basin",
      description: "Environmental degradation pattern",
      badge: "Critical",
      badgeColor: "bg-red-500 text-white",
      icon: <MapPin className="h-5 w-5 text-red-500" />
    },
    {
      title: "Increased bee populations observed near organic farms",
      description: "Biodiversity improvement",
      badge: "Positive Trend",
      badgeColor: "bg-primary text-white",
      icon: <BarChart3 className="h-5 w-5 text-primary" />
    }
  ]

  const environmentalData = [
    { month: 'Jan', airQuality: 85, waterQuality: 78, soilHealth: 82, biodiversity: 72 },
    { month: 'Feb', airQuality: 88, waterQuality: 80, soilHealth: 84, biodiversity: 75 },
    { month: 'Mar', airQuality: 92, waterQuality: 83, soilHealth: 86, biodiversity: 78 },
    { month: 'Apr', airQuality: 89, waterQuality: 85, soilHealth: 88, biodiversity: 80 },
    { month: 'May', airQuality: 94, waterQuality: 87, soilHealth: 90, biodiversity: 83 },
    { month: 'Jun', airQuality: 96, waterQuality: 89, soilHealth: 92, biodiversity: 85 },
    { month: 'Jul', airQuality: 93, waterQuality: 91, soilHealth: 89, biodiversity: 87 },
    { month: 'Aug', airQuality: 91, waterQuality: 88, soilHealth: 87, biodiversity: 84 },
    { month: 'Sep', airQuality: 89, waterQuality: 86, soilHealth: 85, biodiversity: 82 },
    { month: 'Oct', airQuality: 87, waterQuality: 84, soilHealth: 83, biodiversity: 79 },
    { month: 'Nov', airQuality: 85, waterQuality: 82, soilHealth: 81, biodiversity: 77 },
    { month: 'Dec', airQuality: 83, waterQuality: 80, soilHealth: 79, biodiversity: 75 }
  ]

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-8"
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl mb-3 gradient-eco bg-clip-text text-transparent">
            Uncover Hidden Environmental Connections
          </h2>
          <p className="text-muted-foreground text-lg">
            AI-powered insights for a healthier planet
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        {/* Data Upload Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-3"
        >
          <Card className="glass border-0 h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 gradient-eco bg-clip-text text-transparent">
                <Upload className="h-5 w-5 text-primary" />
                <span>Dataset Upload & Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto glass rounded-xl">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <Button className="w-full gradient-eco text-white rounded-xl">
                  Upload Data
                </Button>
                <Button variant="outline" className="w-full rounded-xl border-secondary text-secondary hover:bg-secondary/10">
                  Choose from Library
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Interactive Environmental Data Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-6"
        >
          <Card className="glass border-0 h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Environmental Metrics Trend</span>
              </CardTitle>
              <CardDescription>Real-time environmental quality indicators</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={environmentalData}>
                    <defs>
                      <linearGradient id="airQuality" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="waterQuality" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--secondary)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--secondary)" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="soilHealth" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--accent)" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="biodiversity" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--coral)" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="var(--coral)" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis 
                      dataKey="month" 
                      stroke="var(--muted-foreground)" 
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="var(--muted-foreground)" 
                      fontSize={12}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--glass-bg)', 
                        border: '1px solid var(--glass-border)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                      }} 
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="airQuality"
                      stroke="var(--primary)"
                      fillOpacity={1}
                      fill="url(#airQuality)"
                      name="Air Quality"
                    />
                    <Area
                      type="monotone"
                      dataKey="waterQuality"
                      stroke="var(--secondary)"
                      fillOpacity={1}
                      fill="url(#waterQuality)"
                      name="Water Quality"
                    />
                    <Area
                      type="monotone"
                      dataKey="soilHealth"
                      stroke="var(--accent)"
                      fillOpacity={1}
                      fill="url(#soilHealth)"
                      name="Soil Health"
                    />
                    <Area
                      type="monotone"
                      dataKey="biodiversity"
                      stroke="var(--coral)"
                      fillOpacity={1}
                      fill="url(#biodiversity)"
                      name="Biodiversity"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-3"
        >
          <div className="space-y-4">
            <Card className="glass border-0">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg gradient-eco flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-medium">247</p>
                    <p className="text-xs text-muted-foreground">Active Correlations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass border-0">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-medium">89%</p>
                    <p className="text-xs text-muted-foreground">Data Quality Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>

      {/* AI Insight Cards */}
      <div className="grid grid-cols-3 gap-6">
        {insightCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
          >
            <Card className="glass border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {card.icon}
                    <CardTitle className="text-sm">AI Insight Cards</CardTitle>
                  </div>
                  <Badge className={`text-xs ${card.badgeColor} border-0`}>
                    {card.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="mb-2 text-sm leading-tight">{card.title}</h3>
                <p className="text-xs text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}