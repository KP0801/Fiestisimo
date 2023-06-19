import { StoreProvider } from "./store/ContextExample";
import { AppRouter } from "./router/AppRouter";
function App() {
 
  return(
    <StoreProvider>
      <AppRouter/>
    </StoreProvider>

  );
}

export default App
