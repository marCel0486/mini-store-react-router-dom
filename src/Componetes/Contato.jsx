import React from "react";
import './Contato.css'
import maquina from '../img/contato.jpg'
import Head from "./Head";

const Contato = () => {
    
    return(

        
        <section className="contato animeleft">
            <Head title= 'contato' description='essa é a pagina contato'/>

            <img src={maquina}></img>
        <div className="content">
                <h2>
                    Entre em Contato
                </h2>

                <span className="span-content">aleatorio@gmail.com</span>
                <br/>
                <span className="span-content">99855-9494</span>
                <br/>
                <span className="span-content">Rua dos bobos, 00 </span>
            </div>
        </section>
    )
}

export default Contato