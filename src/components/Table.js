import React from 'react'

export default function Table({
  list, total2,tva}) {  

    return (
    <>
    <div> 
    <table width="80%"  className="text-center text-3xl mx-0 mx-auto	 mb-4  border border-blue-500">
    <thead>
        <tr className='bg-blue-200 p-1'>
          <td className='border border-blue-400'>Réf.</td>
          <td className='border border-blue-400'>Série</td>
          <td className='border border-blue-400'>Ctns</td>
          <td className='border border-blue-400'>Prs</td>
          <td className='border border-blue-400'>Qté</td>
          <td className='border border-blue-400'>P.U.</td>
          <td className='border border-blue-400'>Total T.T.C</td>
        </tr>
      </thead>
        {list.map(({id,refer,serie,box,pair,qty,pu,total}) =>(
            <React.Fragment key={id}>
      <tbody>
        <tr>
          <td className='border border-blue-400' width="25%">{refer}</td>
          <td className='border border-blue-400' width="12.5%">{serie}</td>
          <td className='border border-blue-400' width="5.75">{box}</td>
          <td className='border border-blue-400' width="5.75">{pair}</td>
          <td className='border border-blue-400' width="12.5%">{qty}</td>
          <td className='border border-blue-400' width="12.5%">{pu}</td>
          <td className='border border-blue-400' width="25%">{total}</td>
        </tr>
      </tbody>
            </React.Fragment>
        ))}
    </table>
    </div>   
    <div className="flex items-end justify-between text-gray-800 text-xl font-bold">
        <h2 className='ml-20 text-2xl' >T.V.A:&nbsp; {tva}&nbsp; MAD</h2>
        <h2 className='mr-20 text-2xl'>Total:&nbsp; {total2}&nbsp; MAD</h2>
    </div>
    </>
  )
}
