import styled from "styled-components";

export const NavBar = styled.nav`
  * {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    color: #5cb646;
  }

  ul {
    align-items: center;
    list-style: none;
    padding: 0;
  }

  ul a {
    text-decoration: none;
  }

  ul li {
    display: inline;
    padding: 12px;
  }
`;
