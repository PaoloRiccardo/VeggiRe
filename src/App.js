import Pages from "./Pages/Pages";
import Search from "./Components/Search";
import Cuisine from "./Components/Cuisine";
import {BrowserRouter} from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Title from "./Components/Title";
import {GiKnifeFork} from "react-icons/gi"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}> VeggieRe</Logo>
      </Nav>
      <Title/>
      <Search/>
      <Cuisine/>
      <Pages/>
      </BrowserRouter>
  
    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
svg{
  font-size: 2rem;
}`;
export default App;
