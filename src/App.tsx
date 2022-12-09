import { useState } from 'react';

function App() {
  return (
    <div className="h-screen w-screen">
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <aside className="row-span-3 bg-gray-700 h-screen">01</aside>
        <header className="col-span-2">02</header>
        <div className="row-span-2 col-span-2">03</div>
      </div>
    </div>
  );
}

export default App;
