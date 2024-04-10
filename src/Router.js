import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./pages/home/Home";
import { Erorr404 } from "./pages/Erorr404";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Genres } from "./pages/List/Genres";
import PageTop from "./components/PageTop";

function Router() {
  return (
    <HashRouter>
      <PageTop />
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signup} element={<Signup />} />
        <Route path="/genres/:id" element={<Genres />} />
        <Route path="/*" element={<Erorr404 />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default Router;
