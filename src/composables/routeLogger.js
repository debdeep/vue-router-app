import { useRoute, useRouter } from "vue-router";

export function useRouterLogger() {
    // Call the hooks directly during setup execution
    const route = useRoute();
    const router = useRouter();

    // Optional: Log immediately when the composable is initialized in a component
    // console.log("Current Route:", route);
    // console.log("Router Object:", router);

    return {
        route,
        router
    };
}

export default useRouterLogger;