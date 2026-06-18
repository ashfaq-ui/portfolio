const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// 1. Remove blobs
content = content.replace(/<div className="blob blob-1"><\/div>\n      <div className="blob blob-2"><\/div>\n      <div className="blob blob-3"><\/div>/g, '');

// 2. Project Card
content = content.replace(/glass-panel glass-panel-hover p-6 md:p-8 rounded-xl overflow-hidden/g, 'pro-card pro-card-hover p-6 md:p-8 rounded-xl overflow-hidden flex flex-col h-full');

// General backgrounds
content = content.replace(/glass-panel/g, 'pro-card');
content = content.replace(/bg-white\/5 backdrop-blur-md border border-white\/10/g, 'bg-[#111111] border border-white/5');
content = content.replace(/bg-black\/20 backdrop-blur-md/g, 'bg-black border-b border-white/5');
content = content.replace(/bg-white\/10 backdrop-blur-md border-white\/10/g, 'bg-[#111111] border border-white/5');
content = content.replace(/bg-white\/10 backdrop-blur-md/g, 'bg-white/5');
content = content.replace(/bg-\[#030014\]\/60/g, 'bg-black/90 border-b border-white/10');

// Borders
content = content.replace(/border-white\/20/g, 'border-white/10');
content = content.replace(/border-white\/30/g, 'border-white/10');

// Text Colors
// General text
content = content.replace(/text-indigo-100\/70/g, 'text-zinc-400');
content = content.replace(/text-indigo-200\/50/g, 'text-zinc-500');
content = content.replace(/text-indigo-300\/40/g, 'text-zinc-600');
content = content.replace(/text-indigo-50\/90/g, 'text-zinc-300');
// Special text
content = content.replace(/text-\[#030014\]/g, 'text-black');

// Hero Title
content = content.replace(
    'text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 tracking-tight leading-[1.1]',
    'text-4xl sm:text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[1.1]'
);

// Buttons
content = content.replace(
    /bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:opacity-90 hover:shadow-\[0_0_20px_rgba\(168,85,247,0\.4\)\] transition-all/g,
    'bg-white text-black font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-zinc-200 transition-colors'
);

content = content.replace(
    /w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold py-3 rounded-lg hover:opacity-90 hover:shadow-\[0_0_20px_rgba\(168,85,247,0\.4\)\] transition-all/g,
    'w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 transition-colors duration-300'
);

fs.writeFileSync('src/App.jsx', content);
console.log('Successfully updated App.jsx for the Pro theme');
