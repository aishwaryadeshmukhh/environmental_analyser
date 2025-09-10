import { motion } from 'motion/react'
import { FileText, Download, Calendar, Filter, TrendingUp, AlertTriangle, CheckCircle, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'

export function Reports() {
  const reports = [
    {
      title: "Global Climate Correlation Analysis",
      date: "December 2024",
      status: "Latest",
      description: "Comprehensive analysis of climate data correlations across 150+ regions",
      insights: 247,
      confidence: 94,
      type: "Climate",
      color: "bg-primary"
    },
    {
      title: "Ocean Acidification Impact Study",
      date: "November 2024",
      status: "Published",
      description: "Deep dive into ocean pH changes and marine ecosystem effects",
      insights: 89,
      confidence: 91,
      type: "Marine",
      color: "bg-accent"
    },
    {
      title: "Biodiversity Trends Q4 2024",
      date: "October 2024",
      status: "Draft",
      description: "Quarterly assessment of species population changes and habitat loss",
      insights: 156,
      confidence: 87,
      type: "Biodiversity",
      color: "bg-secondary"
    },
    {
      title: "Air Quality Metropolitan Analysis",
      date: "September 2024",
      status: "Archived",
      description: "Urban air pollution patterns and public health correlations",
      insights: 312,
      confidence: 96,
      type: "Air Quality",
      color: "bg-purple-500"
    }
  ]

  const quickStats = [
    {
      title: "Total Reports",
      value: "47",
      change: "+12%",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Data Sources",
      value: "1,247",
      change: "+8%",
      icon: <BarChart3 className="h-5 w-5" />
    },
    {
      title: "Correlations Found",
      value: "8,934",
      change: "+23%",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: "Critical Alerts",
      value: "12",
      change: "-5%",
      icon: <AlertTriangle className="h-5 w-5" />
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl gradient-eco bg-clip-text text-transparent mb-2">
              Environmental Analysis Reports
            </h2>
            <p className="text-muted-foreground">
              Comprehensive insights and findings from environmental data analysis
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Date Range</span>
            </Button>
            <Button className="gradient-eco text-white">
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-4 gap-4"
      >
        {quickStats.map((stat, index) => (
          <Card key={index} className="glass border-0">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg gradient-eco text-white">
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <p className="text-2xl font-medium">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.title}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {stat.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Reports Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 gap-6"
      >
        {reports.map((report, index) => (
          <Card key={index} className="glass border-0 hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${report.color}`} />
                  <Badge variant="outline" className="text-xs">
                    {report.type}
                  </Badge>
                </div>
                <Badge 
                  variant={report.status === 'Latest' ? 'default' : 'secondary'}
                  className={report.status === 'Latest' ? 'bg-primary' : ''}
                >
                  {report.status}
                </Badge>
              </div>
              <CardTitle className="text-lg leading-tight">{report.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{report.date}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed">{report.description}</p>
              
              <Separator />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-medium text-primary">{report.insights}</p>
                  <p className="text-xs text-muted-foreground">Insights Found</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-medium text-secondary">{report.confidence}%</p>
                  <p className="text-xs text-muted-foreground">Confidence</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Validated</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    View
                  </Button>
                  <Button size="sm" className="gradient-eco text-white">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle>Recent Report Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Global Climate Report generated</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <Badge variant="outline">New</Badge>
              </div>
              
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Ocean Analysis updated with new data</p>
                  <p className="text-xs text-muted-foreground">6 hours ago</p>
                </div>
                <Badge variant="secondary">Updated</Badge>
              </div>
              
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-colors">
                <div className="w-2 h-2 rounded-full bg-coral" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Critical correlation detected in air quality data</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
                <Badge variant="destructive" className="bg-coral">Alert</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}