import { StoreNamesEnum } from '~/lib/constants/store-names-enum';

export const useMainMenuDrawerStore = defineStore(StoreNamesEnum.MAIN_MENU_DRAWER_STORE, () => {
    const isOpen = ref(false);

    function openMainMenuDrawer() {
        isOpen.value = true;
    }

    function closeMainMenuDrawer() {
        isOpen.value = false;
    }

    return { isOpen, openMainMenuDrawer, closeMainMenuDrawer };
});
