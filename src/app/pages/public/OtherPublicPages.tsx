import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/Cards';
import { CheckCircle2, Shield, Zap, Lock } from 'lucide-react';

export function About() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-white mb-4">About EswarSecurity</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">
          We are a team of elite security researchers and penetration testers dedicated to securing the internet.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-400 mb-6">
            To provide enterprise-grade security assessments that don't just check boxes, but actually uncover the critical vulnerabilities that attackers use.
          </p>
          <ul className="space-y-4">
            {['Manual Testing Approach', 'Certified Professionals (OSCP, OSEP)', 'Actionable Reporting'].map(item => (
              <li key={item} className="flex items-center text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10"><Shield className="w-48 h-48 text-orange-500" /></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
            <p className="text-slate-400 mb-6">Applications Secured</p>
            <h3 className="text-3xl font-bold text-white mb-2">10k+</h3>
            <p className="text-slate-400 mb-6">Vulnerabilities Found</p>
            <h3 className="text-3xl font-bold text-white mb-2">0</h3>
            <p className="text-slate-400">Data Breaches for Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const services = [
    { title: 'Web App Penetration Testing', desc: 'In-depth manual testing of web applications to uncover business logic flaws and OWASP Top 10 vulnerabilities.', icon: Shield },
    { title: 'Network Security Assessment', desc: 'Internal and external infrastructure testing to identify misconfigurations and outdated systems.', icon: Zap },
    { title: 'Cloud Security Review', desc: 'Configuration review of AWS, Azure, and GCP environments against CIS benchmarks.', icon: Lock },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-white mb-4">Our Services</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">Comprehensive security assessments tailored to your threat model.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Card key={i} className="hover:border-blue-500/50 transition-colors">
            <CardHeader>
              <s.icon className="h-10 w-10 text-blue-500 mb-4" />
              <CardTitle className="text-xl">{s.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-white mb-4">Transparent Pricing</h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto">Simple scoping, no hidden fees.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          { name: 'Startup', price: '$2,999', desc: 'For small applications', features: ['1 Web Application', 'Automated + Manual Testing', 'Standard Report', '1 Retest'] },
          { name: 'Business', price: '$6,499', desc: 'For medium sized infrastructure', features: ['Up to 3 Web Applications', 'Network Assessment', 'Executive Presentation', '2 Retests'], highlighted: true },
          { name: 'Enterprise', price: 'Custom', desc: 'For complex environments', features: ['Unlimited Scope', 'Continuous Testing', 'API & Cloud Review', 'Dedicated Manager'] }
        ].map((plan, i) => (
          <Card key={i} className={plan.highlighted ? 'border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.15)] relative scale-105 z-10' : ''}>
            {plan.highlighted && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500" />}
            <CardHeader className="text-center pt-8">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <p className="text-slate-400 text-sm mt-2">{plan.desc}</p>
              <div className="mt-4 text-4xl font-bold text-white">{plan.price}</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 mt-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full mt-8 py-3 rounded-lg font-medium transition-colors ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}>
                Contact Sales
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-400">Ready to secure your infrastructure? Let's talk.</p>
        </div>
        <Card>
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input type="email" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
