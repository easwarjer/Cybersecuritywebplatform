import React from 'react';
import { Link, useNavigate } from 'react-router';
import { Shield, Lock, Mail, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/Cards';

import logoImg from '../../imports/image.png';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="h-full flex-1 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950 z-0"></div>
      
      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="text-center">
          <img src={logoImg} alt="EswarSecurity" className="mx-auto h-16 w-auto object-contain" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">Client Portal</h2>
          <p className="mt-2 text-sm text-slate-400">
            Sign in to access your dashboard and reports
          </p>
        </div>
        
        <Card className="bg-slate-900/80 backdrop-blur-sm border-slate-800">
          <CardContent className="pt-6">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 bg-slate-950 border border-slate-700 rounded-lg py-2.5 text-white focus:ring-blue-500 focus:border-blue-500 outline-none sm:text-sm"
                    placeholder="admin@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full pl-10 bg-slate-950 border border-slate-700 rounded-lg py-2.5 text-white focus:ring-blue-500 focus:border-blue-500 outline-none sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 bg-slate-950 border-slate-700 rounded text-blue-500 focus:ring-blue-500 outline-none focus:ring-offset-slate-900"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-400">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900 transition-colors"
                >
                  Sign in
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center bg-slate-900/50 border-t border-slate-800 py-4">
            <p className="text-sm text-slate-400">
              Not a client?{' '}
              <Link to="/contact" className="font-medium text-blue-400 hover:text-blue-300">
                Request an assessment
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
