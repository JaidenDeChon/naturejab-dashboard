import { RoutePathsEnum } from '~/lib/constants/route-paths.enum';

export default defineNuxtRouteMiddleware((to) => {
    if (to.path === RoutePathsEnum.HOME) return navigateTo(RoutePathsEnum.REACTOR_STATUS);
});
