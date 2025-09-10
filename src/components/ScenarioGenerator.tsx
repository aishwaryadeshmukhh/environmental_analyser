import { useState } from 'react'
import { motion } from 'motion/react'
import { Thermometer, CloudRain, Factory, Zap, TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Slider } from './ui/slider'
import { Badge } from './ui/badge'
import { Progress } from './ui/progress'

export function ScenarioGenerator() {
  const [temperature, setTemperature] = useState([2])
  const [rainfall, setRainfall] = useState([0])
  const [emissions, setEmissions] = useState([10])
  const [isRunning, setIsRunning] = useState(false)

  const runScenario = () => {
    setIsRunning(true)
    // Simulate running scenario
    setTimeout(() => setIsRunning(false), 2000)
  }

  const resetScenario = () => {
    setTemperature([2])
    setRainfall([0])
    setEmissions([10])
  }

  const predictions = [
    {
      title: "Air Quality Impact",
      value: "Moderate Decline",
      change: -15,
      icon: <CloudRain className="h-5 w-5" />,
      color: "text-coral"
    },
    {
      title: "Water Availability",
      value: "Significant Decrease",
      change: -32,
      icon: <TrendingDown className="h-5 w-5" />,
      color: "text-red-500"
    },
    {
      title: "Biodiversity Index",
      value: "Critical Threat",
      change: -45,
      icon: <AlertCircle className="h-5 w-5" />,
      color: "text-red-600"
    },
    {
      title: "Renewable Energy Potential",
      value: "Improved Capacity",
      change: +23,
      icon: <Zap className="h-5 w-5" />,
      color: "text-primary"
    }
  ]

  const impactMetrics = [
    { name: "Coral Reef Health", current: 78, predicted: 45, unit: "%" },
    { name: "Forest Cover", current: 92, predicted: 67, unit: "%" },
    { name: "Ocean pH", current: 8.1, predicted: 7.8, unit: "" },
    { name: "Species Diversity", current: 85, predicted: 62, unit: "%" }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-8"
      >
        <h2 className="text-4xl gradient-eco bg-clip-text text-transparent mb-4">
          What-If Scenario Generator
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Explore environmental impacts under different climate conditions
        </p>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        {/* Controls Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-4 space-y-6"
        >
          {/* Temperature Control */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Thermometer className="h-5 w-5 text-coral" />
                <span>Temperature Change</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">+0°C</span>
                <Badge variant="outline" className="border-coral text-coral">
                  +{temperature[0]}°C
                </Badge>
                <span className="text-sm text-muted-foreground">+5°C</span>
              </div>
              <Slider
                value={temperature}
                onValueChange={setTemperature}
                max={5}
                min={0}
                step={0.1}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Global average temperature increase by 2050
              </p>
            </CardContent>
          </Card>

          {/* Rainfall Control */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CloudRain className="h-5 w-5 text-accent" />
                <span>Rainfall Pattern</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">-50%</span>
                <Badge variant="outline" className="border-accent text-accent">
                  {rainfall[0] > 0 ? '+' : ''}{rainfall[0]}%
                </Badge>
                <span className="text-sm text-muted-foreground">+50%</span>
              </div>
              <Slider
                value={rainfall}
                onValueChange={setRainfall}
                max={50}
                min={-50}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Change in average annual precipitation
              </p>
            </CardContent>
          </Card>

          {/* Emissions Control */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Factory className="h-5 w-5 text-secondary" />
                <span>CO2 Emissions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">0 Gt/yr</span>
                <Badge variant="outline" className="border-secondary text-secondary">
                  {emissions[0]} Gt/yr
                </Badge>
                <span className="text-sm text-muted-foreground">50 Gt/yr</span>
              </div>
              <Slider
                value={emissions}
                onValueChange={setEmissions}
                max={50}
                min={0}
                step={1}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                Annual global carbon emissions
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={runScenario}
              disabled={isRunning}
              className="w-full gradient-eco text-white"
            >
              {isRunning ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Running Simulation...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Run Scenario
                </>
              )}
            </Button>
            <Button 
              onClick={resetScenario}
              variant="outline"
              className="w-full border-muted-foreground"
            >
              Reset Parameters
            </Button>
          </div>
        </motion.div>

        {/* Results Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-8 space-y-6"
        >
          {/* Quick Predictions */}
          <div className="grid grid-cols-2 gap-4">
            {predictions.map((prediction, index) => (
              <Card key={index} className="glass border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${prediction.color}`}>
                      {prediction.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium">{prediction.title}</h4>
                      <p className="text-xs text-muted-foreground">{prediction.value}</p>
                    </div>
                    <Badge 
                      variant={prediction.change > 0 ? "default" : "destructive"}
                      className={prediction.change > 0 ? "bg-primary" : "bg-coral"}
                    >
                      {prediction.change > 0 ? '+' : ''}{prediction.change}%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Impact Metrics */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Environmental Impact Projections</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{metric.name}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-muted-foreground">
                        Current: {metric.current}{metric.unit}
                      </span>
                      <span className="text-xs text-coral">
                        Predicted: {metric.predicted}{metric.unit}
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <Progress value={metric.predicted} className="h-2" />
                    <div 
                      className="absolute top-0 h-2 bg-primary/30 rounded-full"
                      style={{ width: `${metric.current}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>0{metric.unit}</span>
                    <span>
                      Impact: {metric.current > metric.predicted ? '↓' : '↑'} 
                      {Math.abs(metric.current - metric.predicted)}{metric.unit}
                    </span>
                    <span>100{metric.unit}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Key Insights */}
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Key Scenario Insights</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-4 w-4 text-coral mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Critical Tipping Point</p>
                  <p className="text-xs text-muted-foreground">
                    Ocean acidification accelerates beyond +2°C warming
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-4 w-4 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Renewable Opportunity</p>
                  <p className="text-xs text-muted-foreground">
                    Solar potential increases 23% in affected regions
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingDown className="h-4 w-4 text-red-500 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Ecosystem Risk</p>
                  <p className="text-xs text-muted-foreground">
                    45% species habitat loss in tropical regions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}