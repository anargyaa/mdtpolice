import React from 'react'

export default function Incident() {
  return (
    <div className='grid grid-cols-3 grid-rows-2 h-full gap-2'>
      <div className="bg-[#1e1e1e] row-span-2 flex flex-col gap-4 py-2 px-2 min-h-24 rounded-xl overflow-y-auto">
        <div className="flex gap-1">
          <div className="text-center bg-[#03040f] rounded-lg p-2 flex-1">
            <h1>Incident</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto p-1">
          <div className="bg-[#03040f] p-2.5 rounded-lg hover:ring-1 flex flex-col">
            <h1 className="font-semibold">Bank Robbery</h1>
            <div className="flex justify-between text-xs opacity-50 font-mono">
              <span>X: 294.48, Y: 64.05, Z: 441.36</span>
              <span>10.00 PM</span>
            </div>
          </div>
          <div className="bg-[#03040f] p-2.5 rounded-lg hover:ring-1 flex flex-col">
            <h1 className="font-semibold">Flecca Robbery</h1>
            <div className="flex justify-between text-xs opacity-50 font-mono">
              <span>X: 294.48, Y: 64.05, Z: 441.36</span>
              <span>10.00 PM</span>
            </div>
          </div>
          <div className="bg-[#03040f] p-2.5 rounded-lg hover:ring-1 flex flex-col">
            <h1 className="font-semibold">Gun Shoot</h1>
            <div className="flex justify-between text-xs opacity-50 font-mono">
              <span>X: 294.48, Y: 64.05, Z: 441.36</span>
              <span>10.00 PM</span>
            </div>
          </div>
          <div className="bg-[#03040f] p-2.5 rounded-lg hover:ring-1 flex flex-col">
            <h1 className="font-semibold">Illegal Hunt</h1>
            <div className="flex justify-between text-xs opacity-50 font-mono">
              <span>X: 294.48, Y: 64.05, Z: 441.36</span>
              <span>10.00 PM</span>
            </div>
          </div>
          <div className="bg-[#03040f] p-2.5 rounded-lg hover:ring-1 flex flex-col">
            <h1 className="font-semibold">Suspicious</h1>
            <div className="flex justify-between text-xs opacity-50 font-mono">
              <span>X: 294.48, Y: 64.05, Z: 441.36</span>
              <span>10.00 PM</span>
            </div>
          </div>
          <div className="bg-[#03040f] p-2.5 rounded-lg hover:ring-1 flex flex-col gap-2">
            <div>
              <h1 className="font-semibold">Jhon Doe</h1>
              <p className='opacity-50 text-sm'>PERAMPOKAN BERSENJATA - MEMBAWA BARANG ILEGAL (200 BORAX)</p>
            </div>
            <div className="flex justify-between text-xs opacity-50 font-mono">
              <span>X: 294.48, Y: 64.05, Z: 441.36</span>
              <span>10.00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1e1e1e] row-span-2 flex flex-col gap-4 py-2 px-2 min-h-24 rounded-xl overflow-y-auto">
        <div className="flex gap-1">
          <div className="text-center bg-[#03040f] rounded-lg p-2 flex-1">
            <h1>Announcement</h1>
          </div>
          <div className="text-center bg-[#03040f] rounded-full p-2">
            <svg className='hover:animate-pulse cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M228.54,86.66l-176.06-54A16,16,0,0,0,32,48V192a16,16,0,0,0,16,16,16,16,0,0,0,4.52-.65L136,181.73V192a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-29.9l28.54-8.75A16.09,16.09,0,0,0,240,138V102A16.09,16.09,0,0,0,228.54,86.66ZM136,165,48,192V48l88,27Zm48,27H152V176.82L184,167Zm40-54-.11,0L152,160.08V79.92l71.89,22,.11,0v36Z"></path></svg>
          </div>
        </div>
        <div id="scroll" className="flex flex-col gap-2 overflow-y-auto p-1">
          <div className="bg-[#03040f] p-2.5 rounded-lg hover:ring-1 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Jhon Doe</h1>
              <span className="text-xs font-mono opacity-50">ID: 24</span>
            </div>
            <p className="text-sm opacity-50">
              HARAP MENJAUH DARI BANK BESAR DIKARENAKAN ADA PRAMPOKAN BERSENJATA, JIKA ADA DI DALAM 2 BLOK KAMI AKAN TIDAK TEGAS 
            </p>
            <div className="flex justify-between text-xs opacity-50 font-mono">
              <span>X: 294.48, Y: 64.05, Z: 441.36</span>
              <span>10.00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1e1e1e] row-span-2 flex flex-col gap-4 py-2 px-2 min-h-24 rounded-xl overflow-y-auto">
        <div className="flex gap-1">
          <div className="text-center bg-[#03040f] rounded-lg p-2 flex-1">
            <h1>Add To Jail</h1>
          </div>
        </div>
        <div id="scroll" className="flex flex-col gap-2 overflow-y-auto p-1">
          <input type="text" placeholder='ID/Kantong' className='bg-[#03040f] p-2 rounded-lg text-sm'/>
          <input type="text" placeholder='Durasi Penjara' className='bg-[#03040f] p-2 rounded-lg text-sm'/>
          <input type="text" placeholder='Denda' className='bg-[#03040f] p-2 rounded-lg text-sm'/>
          <textarea name="" id="" placeholder='Reason' className='bg-[#03040f] p-2 rounded-lg text-sm resize-y min-h-32'></textarea>
          <div className='flex gap-2'>
            <button className='bg-[#911e1e] w-full rounded-lg p-2 hover:ring-1 text-sm'>Reset</button>
            <button className='bg-[#03040f] w-full rounded-lg p-2 hover:ring-1 text-sm'>Kirim</button>
          </div>
        </div>
      </div>
    </div>
  )
}
