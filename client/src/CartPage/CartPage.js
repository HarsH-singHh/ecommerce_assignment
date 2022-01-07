import React, {useState, useEffect} from "react";
import Axios from 'axios';
import './CartPage.css';
import {Link} from 'react-router-dom';

function CartPage(){

    const[itemsList, setItemsList] = useState([]);

    useEffect(()=>{

        Axios.get("http://localhost:3001/read").then((response)=>{
            setItemsList(response.data);
        });

    },[]);

    const cartItems=[];

    itemsList.forEach(item =>{
        if (item.cartStatus){
            cartItems.push(item)
        }
    })

    if (cartItems.length<1){
    
        return(
            <>
            
            <nav className="cart-nav">
                <Link className="searchPageButton" to='/'>
                    BACK TO SEARCH PAGE
                </Link>
        
            </nav>

            <h1 className="empty-cart">No items added</h1>
            </>
            )
    }else{

    return(

        <>
        <nav className="cart-nav">
            <Link className="searchPageButton" to='/'>
                BACK TO SEARCH PAGE
            </Link>

                
        </nav>

        <h1 className="non-empty-cart">ITEMS LIST</h1>

        

            <table className="items-table">
            <thead>
            <tr>
                <th>Item Name</th>
                <th>quantity</th>
                    
            </tr>
            </thead>
            <tbody>
                
                {cartItems.map((item,index)=>{
                
                    return(
                    <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    
                    </tr>
                    )
                })}
                
                </tbody>

                
            </table>
        
        
        </>

    )
    }

}

export default CartPage;