import React from 'react'

export default function Kendaraan() {
  return (
    <div className='grid grid-cols-3 grid-rows-2 h-full gap-2'>
      <div className="bg-[#1e1e1e] row-span-2 flex flex-col gap-4 py-2 px-2 min-h-24 rounded-xl overflow-y-auto">
        <div className="flex gap-1">
          <div className="text-center bg-[#03040f] rounded-lg p-2 flex-1">
            <h1>List Kendaraan Sitaan</h1>
          </div>
        </div>
        <div id="scroll" className="flex flex-col gap-2 overflow-y-auto p-1">
          <div className="bg-[#03040f] p-2.5 rounded-lg hover:ring-1 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold ">John Doe</h1>
              <span className="w-16 text-xs font-mono opacity-100 text-center bg-red-500  rounded-full">Mobil</span>
            </div>
            <p className="text-sm">PARKIR SEMBARANGAN</p>
            <div className="flex justify-between text-xs opacity-50 font-mono">
              <span>Plat: 4P1</span>
              <span>Merk: Supra Mk 4</span>
              <span>10.00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1e1e1e] row-span-2 flex flex-col gap-4 py-2 px-2 min-h-24 rounded-xl overflow-y-auto">
        <div className="flex gap-1">
          <div className="text-center bg-[#03040f] rounded-lg p-2 flex-1">
            <h1>Daftar Pencarian Kendaraan</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 overflow-y-auto p-1">
          <div className="bg-[#03040f] p-2.5 rounded-lg hover:ring-1 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1 className="font-semibold ">John Doe</h1>
              <span className="w-16 text-xs font-mono opacity-100 text-center bg-red-500  rounded-full">Mobil</span>
            </div>
            <p className="text-sm">BERADA DI DAERAH PRAMPOKAN BANK DAN TERINDIKASI DARI KOMPLOTAN PERAMPOK</p>
            <div className="flex justify-between text-xs opacity-50 font-mono">
              <span>Plat: B4I31</span>
              <span>Merk: Evo X</span>
              <span>10.00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1e1e1e] row-span-2 flex flex-col gap-4 py-2 px-2 min-h-24 rounded-xl overflow-y-auto">
        <div className="flex gap-1">
          <div className="text-center bg-[#03040f] rounded-lg p-2 flex-1">
            <h1>Tambah Pencarian Kendaraan</h1>
          </div>
          <div className="text-center bg-[#03040f] rounded-full p-2">
            <svg className='hover:animate-pulse cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
          </div>
        </div>
        <div id="scroll" className="flex flex-col gap-2 overflow-y-auto p-1">
          <input type="text" placeholder='Nomor Plat' className='bg-[#03040f] p-2 rounded-lg text-sm'/>
          <input type="text" placeholder='Nama Pemilik' className='bg-[#03040f] p-2 rounded-lg text-sm'/>
          <select name="" id="" className='bg-[#03040f] p-2 rounded-lg text-sm'>
            <option value="Tidak Memilih Jenis">Jenis Kendaraan</option>
            <option value="">Motor</option>
            <option value="">Mobil</option>
          </select>
          <input type="text" placeholder='Merk Kendaraan' className='bg-[#03040f] p-2 rounded-lg text-sm'/>
          <textarea name="" id="" placeholder='Reason' className='bg-[#03040f] p-2 rounded-lg text-sm resize-y min-h-32'></textarea>
          <textarea name="" id="" placeholder='Pengumuman' className='bg-[#03040f] p-2 rounded-lg text-sm resize-y min-h-32'></textarea>
          <div className='flex gap-2'>
            <button className='bg-[#911e1e] w-full rounded-lg p-2 hover:ring-1 text-sm'>Reset</button>
            <button className='bg-[#03040f] w-full rounded-lg p-2 hover:ring-1 text-sm'>Tambah</button>
          </div>
        </div>
      </div>
    </div>
  )
}
