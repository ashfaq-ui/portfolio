const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Update project card
content = content.replace(/pro-card pro-card-hover p-6 md:p-8 rounded-xl overflow-hidden flex flex-col h-full/g, 'light-card light-card-hover p-6 md:p-8 rounded-xl overflow-hidden flex flex-col h-full');
content = content.replace(/pro-card/g, 'light-card');

// Update generic backgrounds
// Nav background
content = content.replace(/bg-black\/80 backdrop-blur-md/g, 'bg-white/80 backdrop-blur-md border-b border-slate-200');
content = content.replace(/bg-white\/5 backdrop-blur-md border border-white\/10/g, 'bg-slate-50 border border-slate-200 rounded-full');
content = content.replace(/bg-black border-b border-white\/5/g, 'bg-white border-b border-slate-200');
content = content.replace(/bg-[#111111] border border-white\/5/g, 'light-card');
content = content.replace(/bg-black\/90 border-b border-white\/10/g, 'bg-slate-50 border-b border-slate-200');
content = content.replace(/bg-black\/50/g, 'bg-white');
content = content.replace(/bg-zinc-900/g, 'bg-slate-100');

// Mobile Menu
content = content.replace(/bg-\[#050505\]/g, 'bg-slate-50');
// Mobile menu grid pattern (from white to dark)
content = content.replace(/rgba\(255, 255, 255, 0\.03\)/g, 'rgba(0, 0, 0, 0.03)');
content = content.replace(/bg-black\/40/g, 'bg-slate-100/50');
content = content.replace(/border-white\/10/g, 'border-slate-200');
content = content.replace(/border-white\/5/g, 'border-slate-200');

// Text Colors
content = content.replace(/text-white/g, 'text-slate-900');
content = content.replace(/text-zinc-300/g, 'text-slate-800');
content = content.replace(/text-zinc-400/g, 'text-slate-600');
content = content.replace(/text-zinc-500/g, 'text-slate-500');
content = content.replace(/text-zinc-600/g, 'text-slate-400');
content = content.replace(/text-black/g, 'text-white'); // Inverse for the buttons that were white
content = content.replace(/text-\[#030014\]/g, 'text-white');

// Borders
content = content.replace(/border-l-2 border-white/g, 'border-l-2 border-slate-900');

// Hero Title
content = content.replace(
    /text-4xl sm:text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-\[1\.1\] mb-6 md:mb-8/g,
    'text-4xl sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 tracking-tighter leading-[1.1] mb-6 md:mb-8'
);

// Buttons
content = content.replace(
    /bg-white text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-slate-100 transition-colors/g,
    'bg-slate-900 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-slate-800 transition-colors shadow-sm hover:shadow'
);
content = content.replace(
    /bg-white text-white font-bold py-3 rounded-lg hover:bg-slate-100 transition-colors duration-300/g,
    'bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors duration-300 shadow-sm hover:shadow'
);
content = content.replace(
    /bg-slate-100 text-slate-900 border border-slate-200 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-slate-200 transition-colors/g,
    'bg-white text-slate-900 border border-slate-200 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg hover:bg-slate-50 shadow-sm hover:shadow transition-colors'
);


// Replace the noise background with the mesh background
if (!content.includes('mesh-bg')) {
    content = content.replace(/<div className="noise-bg"><\/div>/g, '<div className="mesh-bg"></div>');
}

// Add a solid color for the profile picture instead of grayscale
content = content.replace(/grayscale hover:grayscale-0/g, 'shadow-xl');

// Inputs
content = content.replace(/placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500/g, 'placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500');

fs.writeFileSync('src/App.jsx', content);
console.log('Successfully updated App.jsx for the Light Premium theme');
