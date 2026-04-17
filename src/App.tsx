/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About, { Skills } from './components/About';
import Projects from './components/Projects';
import Contact, { Footer } from './components/Contact';
import CustomCursor, { ScrollProgress } from './components/Interactions';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-gray-100 transition-colors duration-300 cursor-none">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

