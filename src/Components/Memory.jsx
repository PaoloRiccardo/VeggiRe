import React from 'react'
import styled from 'styled-components'

const Memory = () => {
  return (
    <Memo>
        <p><b>Vegetarian</b> food is always thought to be <b>healthier</b>, here you will find all the <b>recipes</b> you need.</p>
        <p><b>Type</b> in the search bar what you want, remember, <b>only vegetarian.</b></p>
    </Memo>
  )
}

const Memo = styled.div`
color: black;
text-align: center;
font-weight: 400;
font-family: "Lobster Two";
p{
    padding: 5px;
    font-size: 1.5rem;
}
`

export default Memory