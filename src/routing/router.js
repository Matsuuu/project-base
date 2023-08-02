// @ts-nocheck
import { Suunta } from "suunta";
import { FooView } from "../views/foo-view.js";
import { HomeView } from "../views/home-view.js";

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

// Add view transitions
const actualRenderer = router.options.renderer;
router.options.renderer = (...args) => {
    if (!document.startViewTransition) {
        actualRenderer(...args);
        return;
    }
    document.startViewTransition(() => actualRenderer(...args));
}