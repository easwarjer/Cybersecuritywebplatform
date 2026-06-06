import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '../../components/Cards';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/Tables';

export function Targets() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Scope Targets</h1>
        <p className="text-sm text-slate-400 mt-1">Manage domains and IP ranges within scope.</p>
      </div>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>In-Scope Assets</CardTitle>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-3 py-1.5 rounded text-sm font-semibold transition-colors">Add Target</button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Target</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Added Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { target: '*.example.com', type: 'Wildcard', date: '2023-10-15', status: 'Active' },
                { target: '192.168.1.0/24', type: 'CIDR', date: '2023-10-16', status: 'Active' },
                { target: 'api.example.com', type: 'Subdomain', date: '2023-10-17', status: 'Active' },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-white">{row.target}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell><Badge variant="success">{row.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export function DNSRecords() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">DNS Records</h1>
        <p className="text-sm text-slate-400 mt-1">Discovered DNS records for scoped domains.</p>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Domain</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { domain: 'example.com', type: 'A', value: '93.184.216.34' },
                { domain: 'example.com', type: 'MX', value: 'mail.example.com' },
                { domain: 'example.com', type: 'TXT', value: 'v=spf1 include:_spf.google.com ~all' },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-white">{row.domain}</TableCell>
                  <TableCell><Badge variant="secondary">{row.type}</Badge></TableCell>
                  <TableCell className="font-mono text-xs">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export function Subdomains() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Discovered Subdomains</h1>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subdomain</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status Code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { sub: 'dev.example.com', ip: '10.0.0.1', code: 401 },
                { sub: 'staging.example.com', ip: '10.0.0.2', code: 200 },
                { sub: 'admin.example.com', ip: '10.0.0.3', code: 403 },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-white">{row.sub}</TableCell>
                  <TableCell>{row.ip}</TableCell>
                  <TableCell>
                    <Badge variant={row.code === 200 ? 'success' : row.code === 401 || row.code === 403 ? 'warning' : 'default'}>
                      {row.code}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export function Technologies() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Technologies Identified</h1>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Target</TableHead>
                <TableHead>Technology</TableHead>
                <TableHead>Version</TableHead>
                <TableHead>Category</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { target: 'example.com', tech: 'Nginx', version: '1.18.0', cat: 'Web Server' },
                { target: 'api.example.com', tech: 'Express', version: '4.17.1', cat: 'Web Framework' },
                { target: 'blog.example.com', tech: 'WordPress', version: '5.8.1', cat: 'CMS' },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium text-white">{row.target}</TableCell>
                  <TableCell>{row.tech}</TableCell>
                  <TableCell>{row.version}</TableCell>
                  <TableCell><Badge variant="outline">{row.cat}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
