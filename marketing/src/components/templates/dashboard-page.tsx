"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Design token data
const coreColors = [
  { name: "background", variable: "--background", class: "bg-background" },
  { name: "foreground", variable: "--foreground", class: "bg-foreground" },
  { name: "primary", variable: "--primary", class: "bg-primary" },
  { name: "primary-foreground", variable: "--primary-foreground", class: "bg-primary-foreground" },
  { name: "secondary", variable: "--secondary", class: "bg-secondary" },
  { name: "secondary-foreground", variable: "--secondary-foreground", class: "bg-secondary-foreground" },
  { name: "muted", variable: "--muted", class: "bg-muted" },
  { name: "muted-foreground", variable: "--muted-foreground", class: "bg-muted-foreground" },
  { name: "accent", variable: "--accent", class: "bg-accent" },
  { name: "accent-foreground", variable: "--accent-foreground", class: "bg-accent-foreground" },
  { name: "destructive", variable: "--destructive", class: "bg-destructive" },
]

const surfaceColors = [
  { name: "card", variable: "--card", class: "bg-card" },
  { name: "card-foreground", variable: "--card-foreground", class: "bg-card-foreground" },
  { name: "popover", variable: "--popover", class: "bg-popover" },
  { name: "popover-foreground", variable: "--popover-foreground", class: "bg-popover-foreground" },
]

const chartColors = [
  { name: "chart-1", variable: "--chart-1", class: "bg-chart-1" },
  { name: "chart-2", variable: "--chart-2", class: "bg-chart-2" },
  { name: "chart-3", variable: "--chart-3", class: "bg-chart-3" },
  { name: "chart-4", variable: "--chart-4", class: "bg-chart-4" },
  { name: "chart-5", variable: "--chart-5", class: "bg-chart-5" },
]

const utilityColors = [
  { name: "border", variable: "--border", class: "bg-border" },
  { name: "input", variable: "--input", class: "bg-input" },
  { name: "ring", variable: "--ring", class: "bg-ring" },
]

const sidebarColors = [
  { name: "sidebar", variable: "--sidebar", class: "bg-sidebar" },
  { name: "sidebar-foreground", variable: "--sidebar-foreground", class: "bg-sidebar-foreground" },
  { name: "sidebar-primary", variable: "--sidebar-primary", class: "bg-sidebar-primary" },
  { name: "sidebar-accent", variable: "--sidebar-accent", class: "bg-sidebar-accent" },
  { name: "sidebar-border", variable: "--sidebar-border", class: "bg-sidebar-border" },
]

const shadows = [
  { name: "2xs", class: "shadow-2xs" },
  { name: "xs", class: "shadow-xs" },
  { name: "sm", class: "shadow-sm" },
  { name: "default", class: "shadow" },
  { name: "md", class: "shadow-md" },
  { name: "lg", class: "shadow-lg" },
  { name: "xl", class: "shadow-xl" },
  { name: "2xl", class: "shadow-2xl" },
]

const radiusSizes = [
  { name: "sm", class: "rounded-sm", size: "calc(var(--radius) - 4px)" },
  { name: "md", class: "rounded-md", size: "calc(var(--radius) - 2px)" },
  { name: "lg", class: "rounded-lg", size: "var(--radius)" },
  { name: "xl", class: "rounded-xl", size: "calc(var(--radius) + 4px)" },
]

const documentSections = [
  { header: "Cover page", type: "Cover page", status: "In Process", target: 18, limit: 5, reviewer: "Eddie Lake" },
  { header: "Table of contents", type: "Table of contents", status: "Done", target: 29, limit: 24, reviewer: "Eddie Lake" },
  { header: "Executive summary", type: "Summary", status: "In Process", target: 45, limit: 30, reviewer: "Sarah Chen" },
  { header: "Technical specs", type: "Technical", status: "Pending", target: 60, limit: 50, reviewer: "Alex Kim" },
  { header: "Budget overview", type: "Financial", status: "Done", target: 15, limit: 15, reviewer: "Jordan Blake" },
]

function ColorSwatch({ name, variable, colorClass }: { name: string; variable: string; colorClass: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 w-full rounded-lg border ${colorClass}`} />
      <div className="space-y-0.5">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">{variable}</p>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  description,
  subtext,
  trend,
  trendValue,
}: {
  title: string
  value: string
  description: string
  subtext: string
  trend: "up" | "down"
  trendValue: string
}) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardDescription className="text-sm">{title}</CardDescription>
          <Badge variant={trend === "up" ? "default" : "secondary"} className="gap-1 text-xs">
            {trend === "up" ? "↑" : "↓"}
            {trendValue}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-3xl font-semibold tracking-tight">{value}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>{description}</span>
          <span>{trend === "up" ? "↑" : "↓"}</span>
        </div>
        <p className="text-xs text-muted-foreground">{subtext}</p>
      </CardContent>
    </Card>
  )
}

export function DashboardPage() {
  const [timePeriod, setTimePeriod] = useState("7days")

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Design System</h1>
            <p className="text-muted-foreground">
              Showcasing all design tokens from global.css
            </p>
          </div>
          <Button className="gap-2">
            + Quick Create
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$1,250.00"
            description="Trending up this month"
            subtext="Visitors for the last 6 months"
            trend="up"
            trendValue="+12.5%"
          />
          <StatCard
            title="New Customers"
            value="1,234"
            description="Down 20% this period"
            subtext="Acquisition needs attention"
            trend="down"
            trendValue="-20%"
          />
          <StatCard
            title="Active Accounts"
            value="45,678"
            description="Strong user retention"
            subtext="Engagement exceed targets"
            trend="up"
            trendValue="+12.5%"
          />
          <StatCard
            title="Growth Rate"
            value="4.5%"
            description="Steady performance increase"
            subtext="Meets growth projections"
            trend="up"
            trendValue="+4.5%"
          />
        </div>

        {/* Main Chart Placeholder */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Total Visitors</CardTitle>
                <CardDescription>Total for the last 3 months</CardDescription>
              </div>
              <Tabs value={timePeriod} onValueChange={setTimePeriod}>
                <TabsList>
                  <TabsTrigger value="3months">Last 3 months</TabsTrigger>
                  <TabsTrigger value="30days">Last 30 days</TabsTrigger>
                  <TabsTrigger value="7days">Last 7 days</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            {/* Chart visualization using design tokens */}
            <div className="h-[300px] w-full flex items-end gap-2 pt-8">
              {[186, 305, 237, 473, 409, 314, 420].map((value, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-md"
                    style={{
                      height: `${(value / 500) * 250}px`,
                      background: `linear-gradient(to top, var(--chart-1), var(--chart-2))`,
                      opacity: 0.8,
                    }}
                  />
                  <span className="text-xs text-muted-foreground">
                    {["Jun 24", "Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29", "Jun 30"][i]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Table Section */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Tabs defaultValue="outline">
                <TabsList>
                  <TabsTrigger value="outline">Outline</TabsTrigger>
                  <TabsTrigger value="performance">
                    Past Performance
                    <Badge variant="secondary" className="ml-1.5">3</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="personnel">
                    Key Personnel
                    <Badge variant="secondary" className="ml-1.5">2</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="documents">Focus Documents</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  Customize Columns
                </Button>
                <Button size="sm" className="gap-1">
                  + Add Section
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8"></TableHead>
                  <TableHead>Header</TableHead>
                  <TableHead>Section Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Target</TableHead>
                  <TableHead className="text-right">Limit</TableHead>
                  <TableHead>Reviewer</TableHead>
                  <TableHead className="w-8"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documentSections.map((section, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <span className="text-xs">⋮⋮</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{section.header}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{section.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {section.status === "Done" ? (
                          <span className="text-green-500">✓</span>
                        ) : section.status === "In Process" ? (
                          <span className="animate-spin">◌</span>
                        ) : (
                          <span className="text-muted-foreground">○</span>
                        )}
                        <span className={section.status === "Done" ? "text-green-500" : "text-muted-foreground"}>
                          {section.status}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{section.target}</TableCell>
                    <TableCell className="text-right">{section.limit}</TableCell>
                    <TableCell>{section.reviewer}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        ⋮
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Design Tokens Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Design Tokens</h2>

          {/* Color Palettes */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Core Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Core Colors</CardTitle>
                <CardDescription>Primary semantic colors for the design system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  {coreColors.map((color) => (
                    <ColorSwatch
                      key={color.name}
                      name={color.name}
                      variable={color.variable}
                      colorClass={color.class}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chart Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Chart Colors</CardTitle>
                <CardDescription>Colors optimized for data visualization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-5 gap-4">
                  {chartColors.map((color) => (
                    <ColorSwatch
                      key={color.name}
                      name={color.name}
                      variable={color.variable}
                      colorClass={color.class}
                    />
                  ))}
                </div>
                {/* Simple bar chart visualization */}
                <div className="h-[100px] flex items-end gap-1">
                  {[400, 300, 200, 278, 189].map((v, i) => (
                    <div key={i} className="flex-1 flex gap-0.5">
                      <div className="flex-1 rounded-t" style={{ height: `${v / 5}px`, backgroundColor: 'var(--chart-1)' }} />
                      <div className="flex-1 rounded-t" style={{ height: `${[240, 139, 380, 390, 480][i] / 5}px`, backgroundColor: 'var(--chart-2)' }} />
                      <div className="flex-1 rounded-t" style={{ height: `${[180, 220, 250, 190, 280][i] / 5}px`, backgroundColor: 'var(--chart-3)' }} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Surface Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Surface Colors</CardTitle>
                <CardDescription>Colors for cards, popovers, and elevated surfaces</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {surfaceColors.map((color) => (
                    <ColorSwatch
                      key={color.name}
                      name={color.name}
                      variable={color.variable}
                      colorClass={color.class}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Utility Colors */}
            <Card>
              <CardHeader>
                <CardTitle>Utility Colors</CardTitle>
                <CardDescription>Border, input, and focus ring colors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {utilityColors.map((color) => (
                    <ColorSwatch
                      key={color.name}
                      name={color.name}
                      variable={color.variable}
                      colorClass={color.class}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Sidebar Colors</CardTitle>
              <CardDescription>Dedicated color tokens for sidebar navigation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {sidebarColors.map((color) => (
                  <ColorSwatch
                    key={color.name}
                    name={color.name}
                    variable={color.variable}
                    colorClass={color.class}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Typography & Spacing */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Typography */}
            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
                <CardDescription>Font families configured in the design system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-mono">--font-sans</p>
                    <p className="text-2xl font-sans">The quick brown fox jumps over the lazy dog</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-mono">--font-mono</p>
                    <p className="text-2xl font-mono">The quick brown fox jumps over the lazy dog</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground font-mono">--font-serif</p>
                    <p className="text-2xl font-serif">The quick brown fox jumps over the lazy dog</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Border Radius */}
            <Card>
              <CardHeader>
                <CardTitle>Border Radius</CardTitle>
                <CardDescription>Radius tokens from --radius base value</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  {radiusSizes.map((radius) => (
                    <div key={radius.name} className="space-y-2">
                      <div className={`h-16 w-full bg-primary ${radius.class}`} />
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">{radius.name}</p>
                        <p className="text-xs text-muted-foreground font-mono">{radius.size}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Shadows */}
          <Card>
            <CardHeader>
              <CardTitle>Shadow Scale</CardTitle>
              <CardDescription>Box shadow tokens from 2xs to 2xl</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
                {shadows.map((shadow) => (
                  <div key={shadow.name} className="space-y-2">
                    <div className={`h-16 w-full bg-card rounded-lg border ${shadow.class}`} />
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">{shadow.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{shadow.class}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* UI Components Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Component Showcase</CardTitle>
              <CardDescription>Interactive examples using design tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Buttons */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">Buttons</h3>
                <div className="flex flex-wrap gap-3">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              {/* Badges */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">Card States</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Card className="bg-card">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-primary-foreground">$</span>
                        </div>
                        <div>
                          <p className="font-medium">Card</p>
                          <p className="text-sm text-muted-foreground">bg-card token</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
                          <span className="text-secondary-foreground">👤</span>
                        </div>
                        <div>
                          <p className="font-medium">Muted</p>
                          <p className="text-sm text-muted-foreground">bg-muted token</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-accent-foreground flex items-center justify-center">
                          <span className="text-accent">⚡</span>
                        </div>
                        <div>
                          <p className="font-medium">Accent</p>
                          <p className="text-sm text-muted-foreground">bg-accent token</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Source Info */}
        <footer className="pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Source: <code className="bg-muted px-1.5 py-0.5 rounded text-xs">marketing-template</code> — 
            Compare with <code className="bg-muted px-1.5 py-0.5 rounded text-xs">saas-boilerplate/dashboard</code> to verify design system consistency.
          </p>
        </footer>
      </div>
    </div>
  )
}
