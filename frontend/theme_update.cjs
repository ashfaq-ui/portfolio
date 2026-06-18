const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Structural changes (Blobs)
if (!content.includes('blob-1')) {
    content = content.replace(
        '<div className="noise-bg"></div>',
        '<div className="noise-bg"></div>\n      <div className="blob blob-1"></div>\n      <div className="blob blob-2"></div>\n      <div className="blob blob-3"></div>'
    );
}

// 2. Class name replacements for Glassmorphism
// Project Card 
content = content.replace(/bg-zinc-900\/40 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 p-6 md:p-8 rounded-xl overflow-hidden hover:bg-zinc-900\/60/g, 'glass-panel glass-panel-hover p-6 md:p-8 rounded-xl overflow-hidden');

// General backgrounds
content = content.replace(/bg-zinc-900\/20/g, 'glass-panel');
content = content.replace(/bg-zinc-900\/30/g, 'glass-panel');
content = content.replace(/bg-zinc-900\/40/g, 'glass-panel');
content = content.replace(/bg-zinc-900\/50/g, 'bg-white/5 backdrop-blur-md border border-white/10');
content = content.replace(/bg-zinc-800\/50/g, 'bg-black/20');
content = content.replace(/bg-zinc-800\/80/g, 'bg-white/10 backdrop-blur-md');
content = content.replace(/bg-black\/50/g, 'bg-black/20 backdrop-blur-md');
content = content.replace(/bg-zinc-900/g, 'bg-white/10 backdrop-blur-md border-white/10');
content = content.replace(/bg-black\/80/g, 'bg-[#030014]/60');

// Borders
content = content.replace(/border-zinc-800\/50/g, 'border-white/10');
content = content.replace(/border-zinc-800/g, 'border-white/10');
content = content.replace(/border-zinc-700/g, 'border-white/20');
content = content.replace(/border-zinc-600/g, 'border-white/30');

// Text Colors
// General text
content = content.replace(/text-zinc-400/g, 'text-indigo-100/70');
content = content.replace(/text-zinc-500/g, 'text-indigo-200/50');
content = content.replace(/text-zinc-600/g, 'text-indigo-300/40');
content = content.replace(/text-zinc-300/g, 'text-indigo-50/90');
// Special text
content = content.replace(/text-zinc-100/g, 'text-white');
content = content.replace(/text-black/g, 'text-[#030014]');

// Gradient Text (Hero Title)
content = content.replace(
    'text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1]',
    'text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 tracking-tight leading-[1.1]'
);

// Buttons
content = content.replace(
    /bg-white text-black font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-zinc-200 transition-colors/g,
    'bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all'
);

content = content.replace(
    /w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors duration-300/g,
    'w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold py-3 rounded-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all'
);


fs.writeFileSync('src/App.jsx', content);
console.log('Successfully updated App.jsx for the new theme');
