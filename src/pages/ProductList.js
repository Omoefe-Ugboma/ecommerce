import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div``
const Title = styled.h1``
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>filter</Filter>
                <Filter>filter2</Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList