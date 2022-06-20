import React from "react";
import { useState, useRef } from "react";
import Table from "./components/Table";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Info from "./components/Info"
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";
function App() {
  const [showInvoice, setShowInvoice] = useState(false)
  const [client, setClient  ] = useState("")
  const [date, setDate  ] = useState("")
  const [invoiceNbr, setInvoiceNbr  ] = useState("")
  const [bookNbr, setBookNbr  ] = useState("")
  const [notes, setNotes  ] = useState("")

  const [refer, setRefer] = useState()
  const [serie, setSerie  ] = useState("")
  const [box, setBox  ] = useState("")
  const [pair, setPair  ] = useState("")
  const [qty, setQty  ] = useState("")
  const [pu, setPu  ] = useState("")
  const [total, setTotal  ] = useState("")
  const [list, setList  ] = useState([])
  const [total2, setTotal2 ] = useState(0)
  const [tva, setTva ] = useState(0)

  const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }
  return (
    <>
    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">

      {showInvoice ?   (
         <>
      <ReactToPrint 
      trigger={() =><button className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 
      border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all
      duration-300 mb-10 ml-5">Imprimer/Télécharger</button>}
      content={() => componentRef.current}
      />
    <div ref={componentRef} className="p-5">
    <Header handlePrint={handlePrint}/>
    <Info client={client} date={date} invoiceNbr={invoiceNbr} bookNbr={bookNbr} />
    <Table 
                 refer={refer}
                 serie={serie}
                 box={box}
                 pair={pair}
                 qty={qty}
                 pu={pu}
                 total={total}
                 list={list}
                 setList={setList}
                 total2={total2}
                 setTotal2={setTotal2}
                 tva={tva}
                 setTva={setTva}
                 />
    <Notes />
    </div>
    <button className="m-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
      border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
      duration-300" onClick={() => setShowInvoice(false)}>Modifier Facture</button></> 
      ) : (
     
      <>
      {/* Client, invoice number, date, numero carnet, notes*/}
    <div className="flex flex-col ">
      <label htmlFor="client">Nom du client</label>
      <input 
        required
        type = "text" 
        name = "client" 
        id = "client" 
        placeholder="Enter" 
        autoComplete="off"
        value={client}
        onChange={(a) =>setClient(a.target.value)}
        />

      <label htmlFor="date">Date</label>
      <input 
        required
        min="0"
        type = "date" 
        name = "date" 
        id = "date" 
        placeholder="Enter" 
        autoComplete="off"
        value={date}
        onChange={(b) =>setDate(b.target.value)}/>

      <label htmlFor="bookNbr">Numéro de carnet</label>
      <input 
        required
        min="0"
        step='0.01'
        type = "number"
        name = "bookNbr"
        id = "bookNbr"
        placeholder = "Enter"
        autoComplete = "off"
        value={bookNbr}
        onChange={(b) =>setBookNbr(b.target.value)}
        />

      <label htmlFor="invoiceNbr">Numéro de facture</label>
      <input 
        required
        min="0"
        step='0.01'
        type = "number"
        name = "bookNbr"
        id = "bookNbr"
        placeholder = "Enter"
        autoComplete = "off"
        value={invoiceNbr}
        onChange={(b) =>setInvoiceNbr(b.target.value)}
        />

          <h1 className="text-4xl font-bold m-5 text-center" ><u>Articles</u></h1>
                <article>
                <TableForm
                  refer={refer}
                  setRefer={setRefer}
                  serie={serie}
                  setSerie={setSerie}
                  box={box}
                  setBox={setBox}
                  pair={pair}
                  setPair={setPair}
                  qty={qty}
                  setQty={setQty}
                  pu={pu}
                  setPu={setPu}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                  total2={total2}
                  setTotal2={setTotal2}
                  tva={tva}
                  setTva={setTva}
                />
              </article>

      <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
      border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
      duration-300">Générer Facture</button>
      </div>
      </>
      )}
    </main>
    </>
  )
}

export default App;