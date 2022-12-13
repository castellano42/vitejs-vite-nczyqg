import { useState } from 'react';
import SideNav from './components/SideNav';
import TopNav from './components/TopNav';
import BookGrid from './components/BookGrid';

function App() {
  return (
    <div
      className="grid grid-rows-[50px_1fr_1fr_120px]
     grid-flow-col h-screen w-screen"
    >
      <aside className="row-span-3 bg-gray-900 ">
        <SideNav />
      </aside>
      <div className="col-span-4 bg-gray-800">Bottom Bar</div>
      <div className="row-span-1 col-span-3 bg-gray-700">
        <TopNav />
      </div>
      <main className="col-span-3 col-span-2">Bo</main>
    </div>
  );
}

export default App;
