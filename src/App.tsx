import { useState } from 'react';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';

function App() {
  return (
    <div
      className="grid 
    grid grid-rows-[60px_1fr_1fr_120px]
    grid-rows-3 grid-flow-col h-screen w-screen"
    >
      <aside className="row-span-3 bg-gray-900 ">
        <SideNav />
      </aside>
      <div className="row-span-1 col-span-3">04</div>
      <header className="col-span-2 bg-gray-700">
        <TopNav />
      </header>
      <div className="row-span-1 col-span-2">03</div>
    </div>
  );
}

export default App;
