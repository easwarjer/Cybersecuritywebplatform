import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '../../components/Cards';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/Tables';
import { Search, Filter } from 'lucide-react';

export default function Findings() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">All Findings</h1>
          <p className="text-sm text-slate-400 mt-1">Manage and track vulnerabilities across all assets.</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search findings..." 
              className="pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-cyan-500 w-full sm:w-64"
            />
          </div>
          <button className="p-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Vulnerability</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Discovered</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: 'VULN-001', name: 'SQL Injection in Login', severity: 'Critical', target: 'api.example.com', status: 'Open', date: 'Oct 15, 2023' },
                { id: 'VULN-002', name: 'Reflected XSS in Search', severity: 'High', target: 'app.example.com', status: 'In Progress', date: 'Oct 16, 2023' },
                { id: 'VULN-003', name: 'IDOR in User Profile', severity: 'High', target: 'api.example.com', status: 'Open', date: 'Oct 17, 2023' },
                { id: 'VULN-004', name: 'Missing Security Headers', severity: 'Low', target: 'example.com', status: 'Closed', date: 'Oct 10, 2023' },
                { id: 'VULN-005', name: 'Outdated jQuery Version', severity: 'Low', target: 'blog.example.com', status: 'Open', date: 'Oct 18, 2023' },
                { id: 'VULN-006', name: 'CSRF on Password Change', severity: 'Medium', target: 'app.example.com', status: 'Open', date: 'Oct 19, 2023' },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-mono text-xs text-slate-400">{row.id}</TableCell>
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
                  <TableCell className="text-slate-300">{row.target}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === 'Closed' ? 'success' : row.status === 'In Progress' ? 'warning' : 'outline'}>
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-400 text-sm">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
