//Error:
//[ Server ] Error: Event handlers cannot be passed to Client Component props.
//<button className=... onClick={function onClick} children=...>
//^^^^^^^^^^^^^^^^^^
//If you need interactivity, consider converting part of this to a Client Component  (This error can be resolved by using "use client")
"use client"; //By Default we have server site component, we make it a client site by using client component.

export default function Home() {
  let count = 0;
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
        <h1>Learning Click Event At Button</h1>
        
        <h1>CountNumber: {count}</h1>
        
        <button
          className="bg-blue-800 p-10 text-lg cursor-pointer text-white"
          onClick={() => {
            count++;//state donot change at localhost but change in browser site
            console.log("Button clicked", count);
          }}
        >
          I am a click Event on this Button
        </button>
      </div>
      
  );
}
//Result can be shown at Browser's console,right click on localhost,inspect and then console.
//onclick is an event and code inside onclick is executed after button being clicked.