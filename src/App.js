import styled from "styled-components";
import Colors from "./assets/Colors";
import Menu from "./assets/components/Menu";

const AppEl = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <AppEl>
      <Menu />
    </AppEl>
  );
}

export default App;
