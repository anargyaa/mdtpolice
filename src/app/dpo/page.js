import React from 'react'

export default function DPO() {
  return (
    <div className='grid grid-cols-3 grid-rows-2 h-full gap-2'>
      <div className='bg-[#1e1e1e] col-span-2 row-span-2 flex flex-col gap-4 py-2 px-2 min-h-24 rounded-xl overflow-y-auto'>
        <div className="flex gap-1">
          <div className="text-center bg-[#03040f] rounded-lg p-2 flex-1">
            <h1>Daftar Pencarian Orang</h1>
          </div>
          <div className="text-center bg-[#03040f] rounded-lg p-2">
            <svg className='hover:animate-pulse cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
          </div>
        </div>
        <div className='rounded-lg border border-[#eaeaea]/50 overflow-hidden m-1'>
          <table className='table-auto w-full'>
            <thead className='bg-[#03040f]'>
              <tr className='text-center'>
                <td className='text-sm p-2 border-r border-[#eaeaea]/50'>No</td>
                <td className='text-sm p-2 border-r border-[#eaeaea]/50'>Nama Lengkap</td>
                <td className='text-sm p-2 border-r border-[#eaeaea]/50'>Reason</td>
                <td className='text-sm p-2 border-r border-[#eaeaea]/50'>Tanggal Penetapan</td>
                <td className='text-sm p-2'>Status</td>
              </tr>
            </thead>
            <tbody className='text-center'>
              <tr className='border-b border-[#eaeaea]/50'>
                <td className='text-sm p-2 border-r border-[#eaeaea]/50'>1</td>
                <td className='text-sm p-2 text-left border-r border-[#eaeaea]/50'>Jhon Doe</td>
                <td className='text-sm p-2 text-left border-r border-[#eaeaea]/50'>Penembakan kepada anggota kepolisian</td>
                <td className='text-sm p-2 border-r border-[#eaeaea]/50'>21 Mei 2024</td>
                <td className='text-sm p-2'>On Progress</td>
              </tr>
              <tr className='border-b border-[#eaeaea]/50'>
                <td className='text-sm p-2 border-r border-[#eaeaea]/50'>1</td>
                <td className='text-sm p-2 text-left border-r border-[#eaeaea]/50'>Jhon Doe</td>
                <td className='text-sm p-2 text-left border-r border-[#eaeaea]/50'>Penembakan kepada anggota kepolisian</td>
                <td className='text-sm p-2 border-r border-[#eaeaea]/50'>21 Mei 2024</td>
                <td className='text-sm p-2'>On Progress</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='bg-[#1e1e1e] row-span-2 flex flex-col gap-4 py-2 px-2 rounded-xl overflow-y-auto'>
        <div className="flex gap-1">
          <div className="text-center bg-[#03040f] rounded-lg p-2 flex-1">
            <h1>Tambah Pencarian Orang</h1>
          </div>
        </div>
        <div id="scroll" className="flex flex-col gap-2 overflow-y-auto p-1">
          <input type="text" placeholder='Nama Lengkap' className='bg-[#03040f] p-2 rounded-lg text-sm'/>
          <input type="text" placeholder='Kelamin' className='bg-[#03040f] p-2 rounded-lg text-sm'/>
          <textarea name="" id="" placeholder='Ciri-ciri' className='bg-[#03040f] p-2 rounded-lg text-sm resize-y min-h-32'></textarea>
          <textarea name="" id="" placeholder='Reason' className='bg-[#03040f] p-2 rounded-lg text-sm resize-y min-h-32'></textarea>
          <div className='flex gap-2'>
            <button className='bg-[#911e1e] w-full rounded-lg p-2 hover:ring-1 text-sm'>Reset</button>
            <button className='bg-[#03040f] w-full rounded-lg p-2 hover:ring-1 text-sm'>Tambah</button>
          </div>
        </div>
      </div>
    </div>
  )
}
