import { useState } from 'react'
import { motion } from 'motion/react'
import { Filter, TrendingUp, BarChart3, Activity, Download, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter
} from 'recharts'

export function Analytics() {
  const [selectedRegion, setSelectedRegion] = useState('global')
  const [selectedTimeframe, setSelectedTimeframe] = useState('12months')

  // Data for Environmental Correlation Analysis
  const correlationData = [
    { month: 'Jan', temperature: 14.2, co2: 410.5, airQuality: 65, biodiversity: 72 },
    { month: 'Feb', temperature: 15.1, co2: 412.3, airQuality: 68, biodiversity: 74 },
    { month: 'Mar', temperature: 16.8, co2: 414.1, airQuality: 72, biodiversity: 76 },
    { month: 'Apr', temperature: 18.5, co2: 415.8, airQuality: 75, biodiversity: 78 },
    { month: 'May', temperature: 20.3, co2: 417.2, airQuality: 78, biodiversity: 80 },
    { month: 'Jun', temperature: 22.1, co2: 418.6, airQuality: 82, biodiversity: 82 },
    { month: 'Jul', temperature: 24.5, co2: 419.8, airQuality: 85, biodiversity: 84 },
    { month: 'Aug', temperature: 23.8, co2: 418.9, airQuality: 83, biodiversity: 85 },
    { month: 'Sep', temperature: 21.2, co2: 417.4, airQuality: 80, biodiversity: 83 },
    { month: 'Oct', temperature: 18.6, co2: 415.7, airQuality: 77, biodiversity: 81 },
    { month: 'Nov', temperature: 16.3, co2: 413.9, airQuality: 73, biodiversity: 78 },
    { month: 'Dec', temperature: 14.8, co2: 412.1, airQuality: 69, biodiversity: 75 }
  ]

  // Data for Regional Impact Analysis
  const regionalData = [
    { region: 'North America', impact: 85, population: 580, co2Reduction: 12 },
    { region: 'Europe', impact: 92, population: 750, co2Reduction: 18 },
    { region: 'Asia', impact: 68, population: 4600, co2Reduction: 8 },
    { region: 'Africa', impact: 76, population: 1400, co2Reduction: 15 },
    { region: 'South America', impact: 81, population: 430, co2Reduction: 14 },
    { region: 'Oceania', impact: 88, population: 45, co2Reduction: 20 }
  ]

  // Data for Environmental Factors Distribution
  const distributionData = [
    { name: 'Air Quality', value: 28, color: 'var(--primary)' },
    { name: 'Water Quality', value: 24, color: 'var(--secondary)' },
    { name: 'Soil Health', value: 22, color: 'var(--accent)' },
    { name: 'Biodiversity', value: 26, color: 'var(--coral)' }
  ]

  // Scatter plot data for correlation analysis
  const scatterData = [
    { temperature: 14.2, biodiversity: 72, airQuality: 65 },
    { temperature: 15.1, biodiversity: 74, airQuality: 68 },
    { temperature: 16.8, biodiversity: 76, airQuality: 72 },
    { temperature: 18.5, biodiversity: 78, airQuality: 75 },
    { temperature: 20.3, biodiversity: 80, airQuality: 78 },
    { temperature: 22.1, biodiversity: 82, airQuality: 82 },
    { temperature: 24.5, biodiversity: 84, airQuality: 85 },
    { temperature: 23.8, biodiversity: 85, airQuality: 83 },
    { temperature: 21.2, biodiversity: 83, airQuality: 80 },
    { temperature: 18.6, biodiversity: 81, airQuality: 77 },
    { temperature: 16.3, biodiversity: 78, airQuality: 73 },
    { temperature: 14.8, biodiversity: 75, airQuality: 69 }
  ]

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl gradient-eco bg-clip-text text-transparent">
              Environmental Analytics Dashboard
            </h2>
            <p className="text-muted-foreground">Interactive data visualization and correlation analysis</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-40 glass">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="global">Global</SelectItem>
                  <SelectItem value="north-america">North America</SelectItem>
                  <SelectItem value="europe">Europe</SelectItem>
                  <SelectItem value="asia">Asia</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
              <SelectTrigger className="w-36 glass">
                <SelectValue placeholder="Timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">3 Months</SelectItem>
                <SelectItem value="6months">6 Months</SelectItem>
                <SelectItem value="12months">12 Months</SelectItem>
                <SelectItem value="5years">5 Years</SelectItem>
              </SelectContent>
            </Select>
            <Button className="gradient-eco text-white">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        {/* Plot 1: Multi-Variable Correlation Analysis */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-8"
        >
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span>Environmental Correlation Analysis</span>
              </CardTitle>
              <CardDescription>
                Temperature, CO2, Air Quality, and Biodiversity correlations over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={correlationData}>
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
                        borderRadius: '12px'
                      }} 
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="temperature"
                      stroke="var(--coral)"
                      strokeWidth={3}
                      dot={{ fill: 'var(--coral)', strokeWidth: 2, r: 4 }}
                      name="Temperature (°C)"
                    />
                    <Line
                      type="monotone"
                      dataKey="airQuality"
                      stroke="var(--primary)"
                      strokeWidth={3}
                      dot={{ fill: 'var(--primary)', strokeWidth: 2, r: 4 }}
                      name="Air Quality Index"
                    />
                    <Line
                      type="monotone"
                      dataKey="biodiversity"
                      stroke="var(--accent)"
                      strokeWidth={3}
                      dot={{ fill: 'var(--accent)', strokeWidth: 2, r: 4 }}
                      name="Biodiversity Score"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Plot 2: Environmental Factors Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-4"
        >
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-secondary" />
                <span>Factor Distribution</span>
              </CardTitle>
              <CardDescription>
                Impact distribution across environmental factors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      innerRadius={60}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--glass-bg)', 
                        border: '1px solid var(--glass-border)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Plot 3: Regional Impact Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-6"
        >
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-accent" />
                <span>Regional Impact Analysis</span>
              </CardTitle>
              <CardDescription>
                Environmental impact scores and CO2 reduction by region
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis 
                      dataKey="region" 
                      stroke="var(--muted-foreground)" 
                      fontSize={11}
                      angle={-45}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'var(--glass-bg)', 
                        border: '1px solid var(--glass-border)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Bar 
                      dataKey="impact" 
                      fill="var(--primary)" 
                      radius={[4, 4, 0, 0]}
                      name="Impact Score"
                    />
                    <Bar 
                      dataKey="co2Reduction" 
                      fill="var(--secondary)" 
                      radius={[4, 4, 0, 0]}
                      name="CO2 Reduction %"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Plot 4: Temperature vs Biodiversity Scatter Plot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-6"
        >
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-highlight" />
                <span>Temperature vs Biodiversity</span>
              </CardTitle>
              <CardDescription>
                Correlation analysis between temperature and biodiversity metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={scatterData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis 
                      type="number" 
                      dataKey="temperature" 
                      name="Temperature"
                      stroke="var(--muted-foreground)"
                      fontSize={12}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="biodiversity" 
                      name="Biodiversity"
                      stroke="var(--muted-foreground)"
                      fontSize={12}
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      contentStyle={{ 
                        backgroundColor: 'var(--glass-bg)', 
                        border: '1px solid var(--glass-border)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Scatter 
                      name="Data Points" 
                      dataKey="biodiversity" 
                      fill="var(--accent)"
                      r={6}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-4 gap-4"
      >
        <Card className="glass border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg gradient-eco flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-semibold">94.2%</p>
                <p className="text-xs text-muted-foreground">Correlation Accuracy</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-semibold">1,247</p>
                <p className="text-xs text-muted-foreground">Data Points Analyzed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-coral flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-semibold">156</p>
                <p className="text-xs text-muted-foreground">Active Correlations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-0">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-coral to-highlight flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-2xl font-semibold">Real-time</p>
                <p className="text-xs text-muted-foreground">Data Processing</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}