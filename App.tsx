
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Strengths from './components/Strengths';
import Process from './components/Process';
import Branches from './components/Branches';
import Programs from './components/Programs';
import Publications from './components/Publications';
import Franchise from './components/Franchise';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Header />
        <main>
          <Hero />
          <Strengths />
          <Process />
          <Programs />
          <Branches />
          <Publications />
          <Franchise />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
