import { List, setRef } from "@material-ui/core"
import React, { useState, useEffect } from "react"
import {v4 as uuidv4} from "uuid"
import {AiOutlineDelete,AiOutlineEdit} from "react-icons/ai"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function TableForm({
    refer,
    setRefer,
    serie, 
    setSerie, 
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
    setList,
    total2,
    setTotal2,
    tva,
    setTva
}) {

    const [isEditing, setIsEditing] = useState(false)
        {/*Submit*/ }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!refer || !serie || !box || !pair || !pu){
            alert("Veuillez Remplir Le Formulaire")
        } else{
            const newItems = {
                id: uuidv4(),
                refer: refer,
                serie: serie,
                box: box,
                pair: pair,
                qty: qty,
                pu: pu,
                total: total,
            }
            setRefer("")
            setSerie("")
            setBox("")
            setQty("")
            setPair("")
            setQty("")
            setPu("")
            setTotal("")
            setList([...list, newItems])
            setIsEditing(false)
            console.log(list)
            }
        }

 
    {/*QTY AND TOTAL*/ }

    useEffect(() => {
        const calculateQty = (qty) => {
          setQty(box * pair)
        }
        calculateQty(qty)
    }, [qty,box,pair,setQty])

    useEffect(() => {
        const calculateTva = (tva) => {
          setTva((total2 * 0.2).toFixed(2))
        }
        calculateTva(tva)
    }, [total2,tva])

    useEffect(() => {
        const calculateTotal = (total) => {
          setTotal((qty * pu).toFixed(2))
        }
        calculateTotal(total)
    }, [total,qty,pu,setTotal])
        {/*P.U  */ } 
      useEffect(() => {
      const calculatePu = (pu) => {
       setPu((pu * 1).toFixed(2))
      }
      calculatePu(pu)
      }, [pu])

  {/*SUM*/ }

    useEffect (() =>{
        let rows = document.querySelectorAll(".total")
        let sum = 0
    
        for(let i = 0; i < rows.length; i++){
            if (rows[i].className === "total"){
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
                setTotal2(sum.toFixed(2))
            }
        }
    })

    {/*Edit Function*/ }
    const editRow = (id) =>{
        const editingRow = list.find((row)=>row.id === id)
        setList(list.filter((row) => row.id !== id))
        setIsEditing(true)
        setRefer(editingRow.refer)
        setSerie(editingRow.serie)
        setBox(editingRow.box)
        setPair(editingRow.pair)
        setPu(editingRow.pu)

    }
    {/*Delete*/ }
    const deleteRow =(id) => setList(list.filter((row) => row.id !==id))
    
    

  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className='md:grid grid-cols-7 gap-10 md:mt-16'>
    <div className='flex flex-col'>
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
    <p className="c">{qty}</p>
    </div>
    <div className='flex flex-col'>
    <label htmlFor='P.U'>P.U </label>
    <input 
    type = "number" name="P.U" id="P.U" 
    placeholder='' value={pu} 
    onChange={(e) => setPu(e.target.value)}
    />
    </div>
    <div className='flex flex-col'>
    <label htmlFor='P.U'>Total</label>
    <p className="c">{total}</p>

    </div>
    </div>
    <button className=" bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 
      border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all
      duration-300" type="submit">
          {isEditing ? "Modification Article":"Ajouter Article"}
      </button>
    </form>
    {/*Table Items*/ }
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
        <tr>
          <td>{refer}</td>
          <td>{serie}</td>
          <td>{box}</td>
          <td>{pair}</td>
          <td>{qty}</td>
          <td>{pu}</td>
          <td className="total">{total}</td>
          <td><button className="text-red-500 font-bold text-xl" onClick={()=> deleteRow(id)}><AiOutlineDelete/></button></td>
          <td><button className="text-yellow-500 font-bold text-xl" onClick={()=> editRow(id)}><AiOutlineEdit/></button></td>
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
