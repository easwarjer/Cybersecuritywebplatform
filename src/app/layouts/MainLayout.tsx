import React from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { 
  Shield, LayoutDashboard, Target, Globe, Server, 
  Cpu, FileSearch, Bug, Fingerprint, Lock, 
  FileText, Users, LogOut, Menu, X, Bell
} from 'lucide-react';
import { cn } from '../utils/cn';
import logoImg from '../../imports/image.png';

const navigation = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  {
    name: 'Reconnaissance',
    icon: Target,
    children: [
      { name: 'Targets', path: '/dashboard/recon/targets' },
      { name: 'DNS Records', path: '/dashboard/recon/dns' },
      { name: 'Subdomains', path: '/dashboard/recon/subdomains' },
      { name: 'Technologies', path: '/dashboard/recon/technologies' },
    ],
  },
  {
    name: 'Enumeration',
    icon: Globe,
    children: [
      { name: 'APIs', path: '/dashboard/enumeration/apis' },
      { name: 'Directories', path: '/dashboard/enumeration/directories' },
      { name: 'Ports', path: '/dashboard/enumeration/ports' },
    ],
  },
  {
    name: 'Vulnerabilities',
    icon: Bug,
    children: [
      { name: 'Authentication', path: '/dashboard/vulnerabilities/authentication' },
      { name: 'CSRF', path: '/dashboard/vulnerabilities/csrf' },
      { name: 'IDOR', path: '/dashboard/vulnerabilities/idor' },
      { name: 'SQL Injection', path: '/dashboard/vulnerabilities/sqli' },
      { name: 'SSRF', path: '/dashboard/vulnerabilities/ssrf' },
      { name: 'XSS', path: '/dashboard/vulnerabilities/xss' },
    ],
  },
  { name: 'Findings', path: '/dashboard/findings', icon: FileSearch },
  { name: 'Reports', path: '/dashboard/reports', icon: FileText },
  { name: 'Users', path: '/dashboard/users', icon: Users },
];

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const location = useLocation();

  const isCurrent = (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 transition-transform duration-300 lg:translate-x-0 lg:static lg:block flex flex-col",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImg} alt="EswarSecurity" className="h-8 w-auto object-contain" />
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="ml-auto lg:hidden text-slate-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.path ? (
                <Link
                  to={item.path}
                  className={cn(
                    "group flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1",
                    location.pathname === item.path
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  )}
                >
                  <item.icon className={cn(
                    "mr-3 flex-shrink-0 h-5 w-5",
                    location.pathname === item.path ? "text-blue-400" : "text-slate-400 group-hover:text-slate-300"
                  )} />
                  {item.name}
                </Link>>
              ) : (
                <div className="mt-4">
                  <div className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center">
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </div>
                  <div className="space-y-1">
                    {item.children?.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={cn(
                          "group flex items-center px-3 py-2 text-sm font-medium rounded-md pl-10",
                          location.pathname === child.path
                            ? "bg-blue-500/10 text-blue-400"
                            : "text-slate-400 hover:bg-slate-800 hover:text-white"
                        )}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800">
          <Link
            to="/login"
            className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <LogOut className="mr-3 h-5 w-5 text-slate-400 group-hover:text-slate-300" />
            Sign out
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-slate-900 border-b border-slate-800">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-slate-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex-1 flex justify-end items-center space-x-4">
            <button className="text-slate-400 hover:text-white relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-900" />
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-medium text-white">
              AD
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-950 p-4 sm:p-6 lg:p-8 text-slate-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
