import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function Prodotti (){
   
    const [prodotti, setprodotti] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((resp)=>{
            setprodotti(resp.data)
            
        })
    },[])
    
    return(
        <>
        <section className="flex container jc-space-between">
           {prodotti.map((product)=>(
            
            <div className="card " key={product.id}>
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p><strong>{product.price} €</strong></p>

            </div>
           ))}
        </section>
      
        </>
    )
}