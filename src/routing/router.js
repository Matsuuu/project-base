import { Suunta } from "suunta";
import { FooView } from "../views/foo-view.js";
import { HomeView } from "../views/home-view.js";

/**
 * @type { import("suunta-core").Route[] }
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
 * @type { import("suunta-core").SuuntaInitOptions }
 * */
const options = {
    routes
}

export const router = new Suunta(options);
