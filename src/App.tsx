import GlobalStyle from "./assets/styles/global";

import Routes from "./routes";

import {Cart} from "./context/cartContext";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Cart>
        <Routes/>
      </Cart>
    </>
  );
}

export default App;
