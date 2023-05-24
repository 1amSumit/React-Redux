// import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

const App = () => {
  const isLogedIn = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isLogedIn && <Auth />}
      {isLogedIn && <UserProfile />}
      {/* <Counter /> */}
    </>
  );
};

export default App;
