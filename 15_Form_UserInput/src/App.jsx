import Header from "./components/Header.jsx";
import Login from "./components/StateLogin.jsx";
import Signup from "./components/Signup.jsx";

//run in the frontend: npm run dev
function App() {
  return (
    <>
      <Header />
      <main>
        <Login />
      </main>
    </>
  );
}

export default App;
