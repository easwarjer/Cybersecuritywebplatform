import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/Cards';
import { FileText, Download, Calendar } from 'lucide-react';

export default function Reports() {
  const reports = [
    { title: 'Q3 External Penetration Test', date: 'Oct 01, 2023', type: 'Full Assessment', size: '2.4 MB' },
    { title: 'API Security Review - v2.0', date: 'Sep 15, 2023', type: 'API Testing', size: '1.1 MB' },
    { title: 'Cloud Infrastructure Audit', date: 'Aug 22, 2023', type: 'Cloud Review', size: '3.8 MB' },
    { title: 'Executive Summary Q2', date: 'Jul 10, 2023', type: 'Executive Report', size: '0.8 MB' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Reports</h1>
          <p className="text-sm text-slate-400 mt-1">Download and view formal assessment reports.</p>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 px-4 py-2 rounded-lg font-semibold transition-colors">
          Generate New Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reports.map((report, i) => (
          <Card key={i} className="hover:border-cyan-500/50 transition-colors group">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-cyan-400" />
              </div>
              <CardTitle>{report.title}</CardTitle>
              <CardDescription>{report.type}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-slate-400 mb-6">
                <Calendar className="mr-2 h-4 w-4" />
                {report.date}
              </div>
              <button className="w-full flex items-center justify-center py-2 px-4 border border-slate-700 rounded-lg text-sm font-medium text-white group-hover:bg-slate-800 transition-colors">
                <Download className="mr-2 h-4 w-4" />
                Download PDF ({report.size})
              </button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
