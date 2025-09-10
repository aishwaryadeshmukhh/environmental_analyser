import { motion } from 'motion/react'
import { Search, Download, FileText, CheckCircle, TrendingUp, TrendingDown, Activity } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function InsightEngine() {
  const insightCards = [
    {
      title: "Reduced Air Pollutants in Urban Areas",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      color: "bg-green-400",
      trend: "improving"
    },
    {
      title: "Coral Reef Health Improving in Pacific",
      icon: <Activity className="h-6 w-6 text-white" />,
      color: "bg-coral",
      trend: "improving"
    },
    {
      title: "Marine Ecosystem Recovery",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      color: "bg-blue-400",
      trend: "stable"
    },
    {
      title: "Ocean Temperature Changes",
      icon: <TrendingDown className="h-6 w-6 text-white" />,
      color: "bg-secondary",
      trend: "declining"
    },
    {
      title: "Arctic Ice Coverage Trends",
      icon: <Activity className="h-6 w-6 text-white" />,
      color: "bg-green-400",
      trend: "stable"
    },
    {
      title: "Soil Quality Improvements",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      color: "bg-blue-400",
      trend: "improving"
    },
    {
      title: "Wildfire Risk Assessment",
      icon: <TrendingDown className="h-6 w-6 text-white" />,
      color: "bg-secondary",
      trend: "critical"
    },
    {
      title: "Forest Cover Analysis",
      icon: <TrendingDown className="h-6 w-6 text-white" />,
      color: "bg-purple-400",
      trend: "declining"
    }
  ]

  const correlationNodes = [
    { id: 'Air', x: 200, y: 150, color: 'bg-green-400' },
    { id: 'Water', x: 150, y: 200, color: 'bg-blue-400' },
    { id: 'Soil', x: 250, y: 200, color: 'bg-green-500' },
    { id: 'Biodiv', x: 200, y: 250, color: 'bg-purple-400' },
    { id: 'Human', x: 300, y: 180, color: 'bg-secondary' }
  ]

  const temperatureData = [
    { year: '1880', temp: -0.2 },
    { year: '1900', temp: -0.1 },
    { year: '1920', temp: -0.05 },
    { year: '1940', temp: 0.1 },
    { year: '1960', temp: 0.0 },
    { year: '1980', temp: 0.4 },
    { year: '2000', temp: 0.6 },
    { year: '2020', temp: 1.0 }
  ]

  const oceanPHData = [
    { year: '1880', pH: 8.2 },
    { year: '1900', pH: 8.18 },
    { year: '1920', pH: 8.16 },
    { year: '1940', pH: 8.14 },
    { year: '1960', pH: 8.12 },
    { year: '1980', pH: 8.10 },
    { year: '2000', pH: 8.08 },
    { year: '2020', pH: 8.05 }
  ]

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-4"
      >
        <div className="flex items-center justify-between">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm text-muted-foreground mb-2">Insight Type</h4>
              <p className="text-sm">Air Quality</p>
              <p className="text-sm">Water Pollution</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-2">Insight Type</h4>
              <p className="text-sm">Water Pollutants</p>
              <p className="text-sm">Ocean Region</p>
            </div>
            <div>
              <h4 className="text-sm text-muted-foreground mb-2">Confidence Level</h4>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <Progress value={85} className="flex-1" />
                <span className="text-sm">70-100%</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <span>Sort By: Newest</span>
              </Button>
              <Button variant="outline" size="sm">
                Highest Impact
              </Button>
              <Button variant="outline" size="sm">
                Region
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Download className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </motion.div>

      {/* Insight Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3 className="text-lg mb-4">Correlation Network Graph</h3>
        <div className="grid grid-cols-4 gap-4 mb-8">
          {insightCards.map((card, index) => (
            <Card key={index} className="glass border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-2">
                <div className={`w-full h-3 ${card.color} rounded-t-lg`} />
              </CardHeader>
              <CardContent className="space-y-3">
                <h4 className="text-sm font-medium leading-tight">{card.title}</h4>
                <div className="flex items-center justify-center mb-2">
                  <div className={`p-3 rounded-lg ${card.color}`}>
                    {card.icon}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-current rounded-full" />
                    <div className="w-1 h-1 bg-current rounded-full" />
                    <div className="w-1 h-1 bg-current rounded-full" />
                  </div>
                  <div className="flex space-x-1">
                    <FileText className="h-3 w-3" />
                    <Download className="h-3 w-3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-8">
        {/* Regional Analytics Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Regional Environmental Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-lg overflow-hidden">
                {/* Regional analysis zones */}
                <div className="absolute inset-0">
                  {/* North America - Good Air Quality */}
                  <div className="absolute top-6 left-6 w-16 h-12 bg-green-400/70 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-white">+2.3%</span>
                  </div>
                  {/* Europe - Stable Water */}
                  <div className="absolute top-8 left-24 w-12 h-8 bg-blue-400/70 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-white">+0.8%</span>
                  </div>
                  {/* Asia - High Pollution */}
                  <div className="absolute top-6 right-6 w-20 h-14 bg-red-400/70 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-white">-1.7%</span>
                  </div>
                  {/* Africa - Improving Biodiversity */}
                  <div className="absolute bottom-12 left-20 w-14 h-16 bg-green-500/70 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-white">+3.1%</span>
                  </div>
                  {/* South America - Forest Coverage */}
                  <div className="absolute bottom-8 left-12 w-12 h-12 bg-orange-400/70 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-white">-0.5%</span>
                  </div>
                  {/* Australia - Ocean Health */}
                  <div className="absolute bottom-10 right-8 w-12 h-8 bg-purple-400/70 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-white">+1.2%</span>
                  </div>
                </div>
                
                {/* Data points with pulsing effect */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-12 left-26 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-10 right-10 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-16 left-22 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                
                {/* Legend */}
                <div className="absolute bottom-3 right-3 glass rounded-lg p-2 space-y-1">
                  <div className="flex items-center space-x-1 text-xs">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Improving</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Declining</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Quality Section */}
          <Card className="glass border-0 mt-6">
            <CardHeader>
              <CardTitle>Data Quality & AI Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Sensor Calibration</span>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary">Stable</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">Satellite Coverage</span>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary">Complete</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-secondary" />
                  <span className="text-sm">AI Confidence</span>
                </div>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary">94%</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trend Charts */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Trend Charts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Global Temperature */}
              <div>
                <h4 className="text-sm font-medium mb-2 text-secondary">Global Temperature Anomaly</h4>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={temperatureData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="year" stroke="var(--foreground)" fontSize={10} />
                      <YAxis stroke="var(--foreground)" fontSize={10} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--glass-bg)', 
                          border: '1px solid var(--glass-border)',
                          backdropFilter: 'blur(12px)',
                          borderRadius: '8px'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="temp" 
                        stroke="var(--secondary)" 
                        strokeWidth={2} 
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Ocean pH */}
              <div>
                <h4 className="text-sm font-medium mb-2 text-accent">Ocean pH Levels</h4>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={oceanPHData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                      <XAxis dataKey="year" stroke="var(--foreground)" fontSize={10} />
                      <YAxis stroke="var(--foreground)" fontSize={10} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'var(--glass-bg)', 
                          border: '1px solid var(--glass-border)',
                          backdropFilter: 'blur(12px)',
                          borderRadius: '8px'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="pH" 
                        stroke="var(--accent)" 
                        strokeWidth={2} 
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CO2 Correlation */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Decreasing CO2 Correlation</p>
                <div className="w-full h-1 bg-gradient-to-r from-red-400 to-green-400 rounded-full mt-2" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Bottom Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center space-x-4"
      >
        <Button className="gradient-eco text-white px-6">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
        <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 px-6">
          <FileText className="h-4 w-4 mr-2" />
          Interactive Report
        </Button>
      </motion.div>
    </div>
  )
}