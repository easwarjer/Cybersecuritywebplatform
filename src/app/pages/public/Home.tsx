import React from 'react';
import { Link } from 'react-router';
import { Shield, Lock, Search, Zap, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden flex-1 flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm text-orange-400 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
            World-Class VAPT Services
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            EswarSecurity
          </h1>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            Enterprise-grade penetration testing and vulnerability management platform. 
            Identify, prioritize, and remediate security flaws before they are exploited.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/services" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Services
            </Link>
            <Link to="/contact" className="border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Request Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <Search className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Deep Discovery</h3>
              <p className="text-slate-400">Advanced reconnaissance and enumeration to map your entire attack surface, leaving no hidden assets behind.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <Zap className="h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Active Exploitation</h3>
              <p className="text-slate-400">Safe, controlled exploitation to prove impact and prioritize critical vulnerabilities over false positives.</p>
            </div>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <Shield className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Remediation Support</h3>
              <p className="text-slate-400">Detailed reports with actionable remediation steps, code snippets, and configuration guidance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
