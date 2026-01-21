import { motion } from "framer-motion";
import { TrendingUp, BookOpen, BarChart3, Users } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400">SURA FX</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">Education</a>
          <a href="#" className="hover:text-green-400">Blog</a>
          <a href="#" className="hover:text-green-400">Dashboard</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="p-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-4"
        >
          Trade Smart. Trade Disciplined.
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Professional ICT & CRT-based trading education, market insights, and performance tracking.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-12 pb-16">
        {[
          { icon: TrendingUp, title: "Market Insights" },
          { icon: BookOpen, title: "Education" },
          { icon: BarChart3, title: "Performance" },
          { icon: Users, title: "Community" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <item.icon className="text-green-400 mb-4" size={32} />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-400 mt-2">Coming soon</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SURA FX. All rights reserved.
      </footer>
    </div>
  );
}
