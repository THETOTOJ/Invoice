import React from 'react'

export default function Table({
  list, total2,tva}) {  
    return (
    <>      
     <table width="100%" className="">
    <thead>
        <tr className='bg-gray-200 p-1'>
          <td>Réf.</td>
          <td>Série</td>
          <td>Cartons</td>
          <td>Paires</td>
          <td>Qté</td>
          <td>P.U.</td>
          <td>Prix Total T.T.C</td>
        </tr>
      </thead>
        {list.map(({id,refer,serie,box,pair,qty,pu,total}) =>(
            <React.Fragment key={id}>
      <tbody>
        <tr className='flex justify-between '>
          <td>{refer}</td>
          <td>{serie}</td>
          <td>{box}</td>
          <td>{pair}</td>
          <td>{qty}</td>
          <td>{pu}</td>
          <td>{total}</td>
        </tr>
      </tbody>
            </React.Fragment>
        ))}
    </table>
    <div className="flex items-end justify-between text-gray-800 text-xl font-bold">
        <h2 >T.V.A:{tva}</h2>
        <h2>Total:{total2}</h2>
    </div>
    </>
  )
}
