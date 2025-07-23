import { ModalStoreType } from "@/types";
import { create } from "zustand";


export const useModalStore = create<ModalStoreType>((set) => ({
    sidebarOpen: false,
    openSidebar: () => {
        set({sidebarOpen: true})
    },
    closeSidebar: () => {
        set({sidebarOpen: false})
    }
}))