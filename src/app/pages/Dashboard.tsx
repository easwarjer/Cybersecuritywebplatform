import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '../../components/Cards';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/Tables';
import { AlertTriangle, ShieldCheck, Bug, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Total Vulnerabilities', value: '124', change: '+12%', trend: 'up', icon: Bug, color: 'text-red-500' },
    { title: 'Critical Issues', value: '8', change: '-2', trend: 'down', icon: AlertTriangle, color: 'text-red-600' },
    { title: 'Assets Scanned', value: '45', change: '+5', trend: 'up', icon: Activity, color: 'text-blue-500' },
    { title: 'Secure Score', value: '78%', change: '+2%', trend: 'up', icon: ShieldCheck, color: 'text-emerald-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard Overview</h1>
        <p className="text-sm text-slate-400 mt-1">Summary of your current security posture.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">{stat.title}</p>
                  <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                </div>
                <div className={`h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-emerald-500 mr-1" />
                )}
                <span className={stat.trend === 'up' && stat.title !== 'Critical Issues' ? 'text-emerald-500' : stat.title === 'Critical Issues' ? 'text-emerald-500' : 'text-red-500'}>
                  {stat.change}
                </span>
                <span className="text-slate-500 ml-2">vs last week</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Findings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vulnerability</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Asset</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: 'SQL Injection in Login', severity: 'Critical', asset: 'api.example.com', status: 'Open' },
                  { name: 'Cross-Site Scripting (Reflected)', severity: 'High', asset: 'app.example.com', status: 'In Progress' },
                  { name: 'Outdated Nginx Version', severity: 'Medium', asset: 'cdn.example.com', status: 'Open' },
                  { name: 'Missing Security Headers', severity: 'Low', asset: 'example.com', status: 'Closed' },
                ].map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-white">{row.name}</TableCell>
                    <TableCell>
                      <Badge variant={
                        row.severity === 'Critical' ? 'destructive' :
                        row.severity === 'High' ? 'warning' :
                        row.severity === 'Medium' ? 'secondary' : 'default'
                      }>
                        {row.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>{row.asset}</TableCell>
                    <TableCell>
                      <Badge variant={row.status === 'Closed' ? 'success' : 'outline'}>{row.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Severity Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: 'Critical', count: 8, color: 'bg-red-500', width: '10%' },
                { label: 'High', count: 24, color: 'bg-orange-500', width: '30%' },
                { label: 'Medium', count: 45, color: 'bg-yellow-500', width: '55%' },
                { label: 'Low', count: 47, color: 'bg-blue-500', width: '60%' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{item.label}</span>
                    <span className="font-medium text-slate-400">{item.count}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: item.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
