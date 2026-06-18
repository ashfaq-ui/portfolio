const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Replace Project Card
content = content.replace(/light-card light-card-hover p-6 md:p-8 rounded-xl overflow-hidden flex flex-col h-full/g, 'space-card space-card-hover p-6 md:p-8 rounded-xl overflow-hidden flex flex-col h-full');
content = content.replace(/light-card/g, 'space-card');

// Backgrounds
content = content.replace(/bg-white\/80 backdrop-blur-md border-b border-slate-200/g, 'bg-[#070714]/90 backdrop-blur-md border-b border-indigo-900/40');
content = content.replace(/bg-slate-50 border border-slate-200 rounded-full/g, 'bg-[#0d0f21] border border-indigo-900/40 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.1)]');
content = content.replace(/bg-white border-b border-slate-200/g, 'bg-[#0d0f21] border-b border-indigo-900/40');
content = content.replace(/bg-slate-50 border-b border-slate-200/g, 'bg-[#070714] border-b border-indigo-900/40');
content = content.replace(/bg-white/g, 'bg-[#0d0f21]'); // careful with bg-white inside other strings, wait, no bg-white is used directly mostly on inputs now or old buttons
content = content.replace(/bg-slate-100\/50/g, 'bg-[#0d0f21]/80');
content = content.replace(/bg-slate-100/g, 'bg-[#0d0f21]');
content = content.replace(/bg-slate-50/g, 'bg-[#070714]');

// Mobile Menu Borders
content = content.replace(/rgba\(0, 0, 0, 0\.03\)/g, 'rgba(99, 102, 241, 0.05)');
content = content.replace(/border-slate-200/g, 'border-indigo-900/40');

// Text Colors
content = content.replace(/text-slate-900/g, 'text-slate-100');
content = content.replace(/text-slate-800/g, 'text-slate-200');
content = content.replace(/text-slate-600/g, 'text-slate-400');
content = content.replace(/text-slate-500/g, 'text-slate-500');
content = content.replace(/text-slate-400/g, 'text-indigo-400/70');
content = content.replace(/border-l-2 border-slate-900/g, 'border-l-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]');

// Hero Title
content = content.replace(
    /text-4xl sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 tracking-tighter leading-\[1\.1\] mb-6 md:mb-8/g,
    'text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 tracking-tight leading-[1.1] mb-6 md:mb-8'
);

// Buttons
content = content.replace(
    /bg-slate-900 text-slate-100 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-slate-800 shadow-sm hover:shadow-md transition-all/g,
    'bg-indigo-600 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all'
);
content = content.replace(
    /bg-slate-900 text-slate-100 font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow-md/g,
    'bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300'
);
content = content.replace(
    /bg-\[#0d0f21\] text-slate-100 border border-indigo-900\/40 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-\[#070714\] shadow-sm hover:shadow-md transition-colors/g,
    'bg-transparent text-indigo-300 border border-indigo-800 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-indigo-900/30 hover:border-indigo-500 transition-colors shadow-sm'
);


// Inputs
content = content.replace(/border border-indigo-900\/40 rounded-lg px-4 py-3 text-slate-100 placeholder:text-indigo-400\/70 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/g, 'border border-indigo-900/50 rounded-lg px-4 py-3 text-slate-100 placeholder:text-indigo-400/50 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-[#0d0f21]');

// Image
content = content.replace(/shadow-xl/g, 'shadow-[0_0_30px_rgba(99,102,241,0.2)] border border-indigo-900/50');

fs.writeFileSync('src/App.jsx', content);
console.log('Successfully updated App.jsx for the Deep Space theme');
