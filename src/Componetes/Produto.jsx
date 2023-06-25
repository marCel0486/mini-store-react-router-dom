import React, { useEffect, useState } from "react";
import './Produto.css'
import Head from "./Head";
import { Link } from "react-router-dom";


const Produto = () => {

const [produtos, setProdutos] = useState(null)

useEffect(()=>{
    fetch('https://ranekapi.origamid.dev/json/api/produto').then(r => r.json())
    .then(p => {
        const Nome = setProdutos(p)
        
        
        
    })

},[]) 


    if(produtos === null) return null
    return(
        <section className="produto animeleft">
            {produtos.map((produto => <Link to={`produto/${produto.id}`} key={produto.id}>

                <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}>
                </img>
                <h1 className="nome">
                    {produto.nome}
                </h1>

            </Link>))}

<Head title= 'produto' description='essa é a pagina contato'/>
            
            
        </section>
    )
}

export default Produto