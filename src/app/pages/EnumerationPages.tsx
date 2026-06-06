import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '../../components/Cards';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/Tables';

export function APIs() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">API Endpoints</h1>
        <p className="text-sm text-slate-400 mt-1">Discovered API endpoints and methods.</p>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Endpoint</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Auth Required</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { endpoint: '/api/v1/users', method: 'GET', auth: 'Yes' },
                { endpoint: '/api/v1/login', method: 'POST', auth: 'No' },
                { endpoint: '/api/v2/data', method: 'GET', auth: 'Yes' },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-mono text-sm text-slate-300">{row.endpoint}</TableCell>
                  <TableCell>
                    <Badge variant={row.method === 'GET' ? 'success' : row.method === 'POST' ? 'warning' : 'default'}>
                      {row.method}
                    </Badge>
                  </TableCell>
                  <TableCell>{row.auth === 'Yes' ? <Badge variant="outline">Bearer Token</Badge> : <Badge variant="destructive">None</Badge>}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export function Directories() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Directories & Files</h1>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Path</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Size</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { path: '/admin/', status: 403, size: '256 B' },
                { path: '/backup.zip', status: 200, size: '45 MB' },
                { path: '/.git/config', status: 200, size: '1.2 KB' },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="font-mono text-sm text-white">{row.path}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === 200 ? 'destructive' : 'warning'}>{row.status}</Badge>
                  </TableCell>
                  <TableCell>{row.size}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export function Ports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Open Ports</h1>
      </div>
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Host</TableHead>
                <TableHead>Port</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>State</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { host: '192.168.1.10', port: 22, service: 'ssh', state: 'open' },
                { host: '192.168.1.10', port: 80, service: 'http', state: 'open' },
                { host: '192.168.1.10', port: 443, service: 'https', state: 'open' },
                { host: '192.168.1.10', port: 3306, service: 'mysql', state: 'filtered' },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell className="text-white">{row.host}</TableCell>
                  <TableCell className="font-mono">{row.port}</TableCell>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>
                    <Badge variant={row.state === 'open' ? 'success' : 'secondary'}>{row.state}</Badge>
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
