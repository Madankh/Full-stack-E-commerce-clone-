import styled  from "styled-components"
import {categories} from "../component/data"
import CategoriesItem from "./CategoriesItem";
import {mobile} from "../responsive";

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({padding:"0px" , flexDirection:"column"})}
`;

const Categories=()=> {
    return <Container>
            {categories.map(type=>(
                <CategoriesItem item={type} key={type.id}/>
            ))}
        </Container>
    
}

export default Categories
