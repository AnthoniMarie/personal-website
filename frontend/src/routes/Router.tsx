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
import Blog from "../pages/Blog";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Landing/>}/>
            <Route path={"/blog"} element={<Blog/>}/>
        </Routes>
    </BrowserRouter>
)
