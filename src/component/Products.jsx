import axios from "axios";
import React, {useState , useEffect} from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
   padding:20px;
   display:flex;
   flex-wrap:wrap;
`;

const Products = ({cat , filters , sort}) => {
    console.log(cat , filters , sort)

    const [products , setProducts] = useState([]);
    const [filteredProducts , setFilterdProducts] = useState([]);

    useEffect(() => {
       const getProducts = async () =>{
           try {
               const res = await axios.get( cat ? `http://localhost:5000/api/product?category=${cat}`
                : "http://localhost:5000/api/product"    
              );
               setProducts(res.data)
           } catch (error) {      
           }
       }
       getProducts();
    }, [cat])

    useEffect(() => {
        cat && setFilterdProducts(
            products.filter((item) => 
            
                Object.entries(filters).every(([key , value]) =>
                item[key].includes(value)
                )
            )
        );
    },[products , cat , filters])
    return (
        <Container>
            {filteredProducts.map((item)=>(
                <Product propsitem={item} key={item.id}/>
            ))}
        </Container>
    )
}
export default Products
