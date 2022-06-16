import React from 'react'

export default function Table({
  serie, 
  refer,
  box, 
  pair, 
  qty, 
  pu,
  total,

}) {  
    return (
    <>      
      <table width="100%">
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
        <tbody>
          <tr>
            <td>{refer}</td>
            <td>{serie}</td>
            <td>{box}</td>
            <td>{pair}</td>
            <td>{qty}</td>
            <td>{pu}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
