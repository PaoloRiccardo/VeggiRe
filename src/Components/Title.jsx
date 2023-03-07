import styled from "styled-components"

const Title = () => {
  return (
    <Section>
        <div className="Hero-img">
            <h1>The Best Vegetarian Recipes</h1>
        </div>
    </Section>
  )
}

const  Section = styled.div`
margin: 2rem;

h1{
text-align: center;
font-family: "Lobster Two", cursive;
font-size: 5rem;
}

`;





export default Title