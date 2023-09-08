import { Suunta } from "suunta";
import { FooView } from "../views/foo-view.js";
import { HomeView } from "../views/home-view.js";
import "./view-transition-hotfix.js";
import { addViewTransitions } from "./view-transition-hotfix.js";

/**
 * @type { import("suunta").Route[] }
 * */
const routes = [
    {
        path: "/",
        name: "Home",
        view: HomeView
    },
    {
        path: "/foo",
        name: "FooView",
        view: FooView
    }
];

/**
 * @type { import("suunta").SuuntaInitOptions }
 * */
const options = {
    routes
}

export const router = new Suunta(options);

addViewTransitions(router);
