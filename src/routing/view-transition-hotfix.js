// @ts-nocheck

/**
 * @param { import("suunta").Suunta } router
 * */
export function addViewTransitions(router) {
    const actualRenderer = router.options.renderer;
    router.options.renderer = (...args) => {
        if (!document.startViewTransition) {
            actualRenderer(...args);
            return;
        }
        document.startViewTransition(() => actualRenderer(...args));
    };
}
