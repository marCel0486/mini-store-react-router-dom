import React, { useState } from "react";
import './ProdutoPg.css'
import { useParams } from "react-router-dom";
import Head from "./Head";

const ProdutoPg = () => {

    const [produto, setProduto] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const { id } = useParams()
    
    React.useEffect(()=> {
        async function fetchProduto(url) {

           try{
            setLoading(true)
            const response = await fetch(url)
            const json = await response.json()
            setProduto(json)

           }catch(erro){
            setError('ocorreu um erro')
           }finally{
            setLoading(false)
           }
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)

    },[id])

    if(loading) return <div >Carregando...</div>
    if(error) return <p>{error}</p>
    if(produto === null) return null

    return (
        <section className="produtopg animeleft">
            <Head title={`produtos/ ${produto.nome}`}/>

            <div>
            {produto.fotos.map(foto => <img key={foto.src} src={foto.src} alt={foto.titulo} />)}
            </div>

           <div>
            <h1>
                {produto.nome}
            </h1>

            <span className="preco">
           R$:{produto.preco}
            </span>
            
            <p className="descricao">
                {produto.descricao}
            </p>
           </div>
        </section>
    )
}


export default ProdutoPg