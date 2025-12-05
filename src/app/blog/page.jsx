'use client';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">Intelligence</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {/* Placeholder blog posts */}
         {[1, 2, 3].map(i => (
             <div key={i} className="h-64 rounded-3xl bg-surface/30 border border-white/5 flex items-center justify-center animate-pulse">
                <span className="text-gray-600">Coming Soon</span>
             </div>
         ))}
      </div>
    </div>
  );
}
