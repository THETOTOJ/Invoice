import React from "react";
import { useState } from "react";
import Table from "./components/Table";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Info from "./components/Info"
import TableForm from "./components/TableForm";
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


  const handlePrint = () => {
    window.print()
  }
  return (
    <>
    <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
      {showInvoice ?     
    <div>
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
                 />
    <Notes />
    <button className="m-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
      border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
      duration-300" onClick={() => setShowInvoice(false)}>Edit Information</button>
    </div> : (
      <>
      {/* Client, invoice number, date, numero carnet, notes*/}
    <div className="flex flex-col justify-center items-center ">
      <label htmlFor="client">Nom du client</label>
      <input 
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
        type = "date" 
        name = "date" 
        id = "date" 
        placeholder="Enter" 
        autoComplete="off"
        value={date}
        onChange={(b) =>setDate(b.target.value)}/>

      <label htmlFor="bookNbr">Numéro de carnet</label>
      <input 
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
        type = "number"
        name = "bookNbr"
        id = "bookNbr"
        placeholder = "Enter"
        autoComplete = "off"
        value={invoiceNbr}
        onChange={(b) =>setInvoiceNbr(b.target.value)}
        />


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
                />
              </article>

      <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
      border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
      duration-300">Preview Invoice</button>
      </div>
      </>
      )}
    </main>
    </>
  )
}

export default App;