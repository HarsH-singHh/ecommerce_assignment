import React, {useState, useEffect} from "react";
import Axios from 'axios';
import './SearchPage.css';
import {Link} from 'react-router-dom';

function SearchPage(){

    const[itemsList, setItemsList] = useState([]);

    const[newQuant, setNewQuant] = useState(0);

    useEffect(()=>{

        Axios.get("http://localhost:3001/read").then((response)=>{
            setItemsList(response.data);
        });

    },[]);

    const updateQuant = (id)=>{
        Axios.put("http://localhost:3001/update",{
            id:id,
            newQuant : newQuant,
            status:true
        }
        );
        setNewQuant(0);
    }
    
    const updateStatus= (id)=>{
        Axios.put("http://localhost:3001/update",{
            id:id,
            newQuant : newQuant,
            status: false
        }
        );
    }

    
    
    return(

        <>
        <nav className="searchNavbar">
            <img className="logo" src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-brand-logo-png-1.png"></img>
            <Link className="CartPageButton" to='/CartPage'>
            <label className="cart-label">Go to cart</label>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="svg-inline--fa fa-shopping-cart fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/></svg>
            </Link>
        </nav>
        
        <div className="items-wrapper">

        {itemsList.map((item,index)=>{
                
                return(
                <div className="image-card" key={index}>
                    <img alt={`${item.title}_img `}src={item.imageURL}></img>
                    <p>{item.title}</p>
                    <p>{item.desc}</p>
                    <div className="add-to-cart">
                        <form className="cart-form">
                        <label>Quantity : </label>
                        <input onChange={(event)=>{
                            setNewQuant(event.target.value);
                        }} type="number" />
                        <button onClick={()=>updateQuant(item._id)} >
                        <label>ADD</label> 
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="svg-inline--fa fa-shopping-cart fa-w-18" role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/></svg>
                        </button>
                        <div className="delete-item">
                        <button onClick={()=>updateStatus(item._id)} >
                            <label>REMOVE FROM CART</label>
                        </button>
                        </div>
                        </form>

                        
                    </div>
                </div>
                
                )
            })}

        </div>

        </>

    )

}

export default SearchPage;