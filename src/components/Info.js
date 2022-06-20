import React from 'react'

export default function Info({client,date,bookNbr,invoiceNbr}) {
  return (
    <div className="flex test mb-5">
    <section className="mt-5 ml-4 ">
      <h2 className="text-2xl font-bold">Client:&nbsp;{client}</h2>
      <h2 className="text-2xl font-bold"> Date:&nbsp;{date}</h2>
      
    </section>
    <section className="mt-5 mr-4">
    <h2 className="text-2xl font-bold">Numéro Carnet:&nbsp;{bookNbr}</h2>
    <h2 className="text-2xl font-bold">Numéro Facture:&nbsp;{invoiceNbr}</h2>
    </section>
    </div>  )
}
