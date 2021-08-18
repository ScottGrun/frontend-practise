import type { NextPage } from "next";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <div>
      <Header>Hello World</Header>
    </div>
  );
};

const Header = styled.h1`
  font-family: ${(p) => p.theme.FONTS.heading};
  font-size: 2rem;
`;

export default Home;
