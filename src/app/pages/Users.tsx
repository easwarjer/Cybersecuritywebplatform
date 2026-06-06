import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, Badge } from '../../components/Cards';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/Tables';
import { UserPlus, MoreVertical } from 'lucide-react';

export default function Users() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">User Management</h1>
          <p className="text-sm text-slate-400 mt-1">Manage platform access and roles.</p>
        </div>
        <button className="flex items-center bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-4 py-2 rounded-lg font-semibold transition-colors">
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </button>
      </div>

      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: 'Admin User', email: 'admin@example.com', role: 'Administrator', status: 'Active', login: '2 mins ago' },
                { name: 'Security Team', email: 'security@example.com', role: 'Analyst', status: 'Active', login: '1 hour ago' },
                { name: 'Developer', email: 'dev@example.com', role: 'Viewer', status: 'Active', login: 'Yesterday' },
                { name: 'Former Employee', email: 'former@example.com', role: 'Viewer', status: 'Inactive', login: '2 months ago' },
              ].map((row, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div>
                      <div className="font-medium text-white">{row.name}</div>
                      <div className="text-sm text-slate-400">{row.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === 'Active' ? 'success' : 'outline'}>{row.status}</Badge>
                  </TableCell>
                  <TableCell className="text-slate-400">{row.login}</TableCell>
                  <TableCell>
                    <button className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
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
