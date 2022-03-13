import * as React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/Contact";
import Article from "../pages/blog/Article";
import Solutions from "../pages/Solutions";
import Projects from "../pages/projects/Projects";
import Project from "../pages/projects/Project";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Landing/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/blog"} element={<Blog/>}/>
            <Route path={"blog/details/:slug"} element={<Article/>}/>
            <Route path={"/contact"} element={<Contact data={"details"}/>}/>
            <Route path={"/contact/book"} element={<Contact data={"book"}/>}/>
            <Route path={"/solutions"} element={<Solutions/>}/>
            <Route path={"/work"} element={<Projects/>}/>
            <Route path={"work/details/:slug"} element={<Project/>}/>
        </Routes>
    </BrowserRouter>
)
