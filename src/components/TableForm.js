import { List } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import {v4 as uuidv4} from "uuid"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function TableForm({
    serie, 
    setSerie, 
    refer,
    setRefer,
    box, 
    setBox, 
    pair, 
    setPair, 
    qty, 
    setQty,
    pu,
    setPu,
    total,
    setTotal,
    list,
    setList
}) {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!refer || !serie || !box) {
            toast.error("Please fill in all inputs")
          } else { 
        const newItems = {
            id: uuidv4(),
            refer,
            serie,
            box,
            pair,
            qty,
            pu,
            total,
        }
        setRefer("")
        setSerie("")
        setBox("")
        setQty("")
        setPair("")
        setQty("")
        setPu("")
        setTotal("")
        setList([...List, newItems])
        console.log(list)
        
    }}

    useEffect(() => {
        const calculateQty = (qty) => {
          setQty(box * pair)
        }
        calculateQty(qty)
    })
    useEffect(() => {
        const calculateTotal = (total) => {
          setTotal(qty * pu)
        }
        calculateTotal(total)
    })

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='md:grid grid-cols-7 gap-10 md:mt-16'>
    <div className='flex flex-col '>
    <label htmlFor='refer'>Refer</label>
    <input type = "text" 
    name="refer" 
    id="refer" 
    placeholder='refer' 
    value={refer} 
    onChange={(e) => setRefer(e.target.value)}
    />

    </div>
    <div className='flex flex-col'>
    <label htmlFor='serie'>Série</label>
    <input type = "text" 
    name="serie" 
    id="serie" 
    placeholder='Série' 
    value={serie} 
    onChange={(e) => setSerie(e.target.value)}
    />
    </div>
    <div className='flex flex-col'>
    <label htmlFor='box'>Cartons</label>
    <input type = "number" name="box" id="box" 
    placeholder='Cartons' value={box} 
    onChange={(e) => setBox(e.target.value)}
    />
    </div>
    <div className='flex flex-col'>
    <label htmlFor='pair'>Paires</label>
    <input type = "number" name="pair" id="pair" 
    placeholder='Paires' value={pair} 
    onChange={(e) => setPair(e.target.value)}
    />
    </div>
    <div className='flex flex-col'>
    <label htmlFor='qty'>Qté</label>
    <p>{qty}</p>
    </div>
    <div className='flex flex-col'>
    <label htmlFor='P.U'>P.U</label>
    <input type = "number" name="P.U" id="P.U" 
    placeholder='P.U' value={pu} 
    onChange={(e) => setPu(e.target.value)}
    />
    </div>
    <div className='flex flex-col'>
    <label htmlFor='P.U'>Total</label>
    <p>{total}</p>

    </div>
    </div>
    <button className="m-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
      border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
      duration-300" type="submit">Add</button>
    </form>

    </>
  )
}
