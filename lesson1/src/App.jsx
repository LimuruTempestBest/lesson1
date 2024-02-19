import React from 'react'
import apple from './assets/applea.jpg'
import { Icon } from '@iconify/react';

function App() {
  return (
    <div className="bg-slate-300 w-full h-screen">
      <div className="flex justify-center items-center w-full h-screen">
        <div className="flex flex-col relative">
          <img className="shadow-xl w-96 rounded-t-lg" src={apple} />
          <div className="rounded-b-lg p-4 bg-slate-900">
            <div className="text-slate-100 font-semibold text-2xl tracking-wide">
              Apple Vision Pro
            </div>
            <div className="text-slate-100 font-medium text-lg mt-1">
              by <span className="font-bold tracking-wide">Daniel</span> from <span className="font-bold tracking-wide">HT</span>
            </div>
            <div className="text-slate-100 font-medium text-xl tracking-wide mt-2">
              $10000
            </div>
            <div className="flex items-center">
              <div className="flex flex-row text-yellow-500 text-xl">
                <Icon icon="ic:round-star" />
                <Icon icon="ic:round-star" />
                <Icon icon="ic:round-star" />
                <Icon icon="ic:round-star" />
                <Icon icon="ic:round-star" />
              </div>
              <span className="ml-1 text-lg text-slate-100 font-semibold">(100)</span>
            </div>
            <Icon className="p-2 text-4xl bg-green-300 rounded absolute bottom-3 right-3 hover:animate-bounce" icon="ion:cart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App