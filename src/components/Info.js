import React from 'react'

export default function Info({client,date,bookNbr,invoiceNbr}) {
  return (
    <div className="flex test">
    <section className="mt-5 ">
      <h2 className="text-xl">Client:&nbsp;{client}</h2>
      <h2 className="text-xl"> Date:&nbsp;{date}</h2>
    </section>
    <section className="mt-5">
    <h2 className="text-xl">Numero Carnet:&nbsp;{bookNbr}</h2>
    <h2 className="text-xl">Numero facture:&nbsp;{invoiceNbr}</h2>
    </section>
    </div>  )
}
