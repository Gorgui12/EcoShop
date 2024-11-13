
import { useEffect, useState } from 'react'
import {HeroSection} from '../../Components/HomeComponents/HomeComponents'
import {ProductHighlights} from '../../Components/HomeComponents/HomeComponents'



export  function Home(){
    const [Products, setProduct] = useState([]);

    useEffect(()=>{
    async function ProductResponse(){
       try{
        const Response = await fetch('https://fakestoreapi.com/products/');
        const Result = await Response.json();
        setProduct(Result)

       }catch{

       }
    }
    ProductResponse()
        
    },[])

    
    
    return(
        <div>
            <HeroSection/>
            <ProductHighlights products = {Products} />
        </div>
    )
}

