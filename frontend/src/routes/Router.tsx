import * as React from "react"
import {
    ChakraProvider,
    theme,
} from "@chakra-ui/react"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Landing/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/blog"} element={<Blog/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
)
