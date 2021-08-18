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
  font-family: ${(p) => p.theme.font.heading};
`;

export default Home;
