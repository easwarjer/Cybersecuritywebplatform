import React from 'react';
import { createBrowserRouter } from 'react-router';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import MainLayout from './layouts/MainLayout';

// Public Pages
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import { About, Services, Pricing, Contact } from './pages/public/OtherPublicPages';

// Dashboard Pages
import Dashboard from './pages/Dashboard';
import { Targets, DNSRecords, Subdomains, Technologies } from './pages/ReconPages';
import { APIs, Directories, Ports } from './pages/EnumerationPages';
import { AuthVuln, CSRFVuln, IDORVuln, SQLiVuln, SSRFVuln, XSSVuln } from './pages/VulnerabilityPages';
import Findings from './pages/Findings';
import Reports from './pages/Reports';
import Users from './pages/Users';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicLayout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "login", Component: Login },
    ],
  },
  {
    path: "/dashboard",
    Component: MainLayout,
    children: [
      { index: true, Component: Dashboard },
      // Recon
      { path: "recon/targets", Component: Targets },
      { path: "recon/dns", Component: DNSRecords },
      { path: "recon/subdomains", Component: Subdomains },
      { path: "recon/technologies", Component: Technologies },
      // Enumeration
      { path: "enumeration/apis", Component: APIs },
      { path: "enumeration/directories", Component: Directories },
      { path: "enumeration/ports", Component: Ports },
      // Vulnerabilities
      { path: "vulnerabilities/authentication", Component: AuthVuln },
      { path: "vulnerabilities/csrf", Component: CSRFVuln },
      { path: "vulnerabilities/idor", Component: IDORVuln },
      { path: "vulnerabilities/sqli", Component: SQLiVuln },
      { path: "vulnerabilities/ssrf", Component: SSRFVuln },
      { path: "vulnerabilities/xss", Component: XSSVuln },
      // Other
      { path: "findings", Component: Findings },
      { path: "reports", Component: Reports },
      { path: "users", Component: Users },
    ],
  },
]);
