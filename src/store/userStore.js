import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: 'userStore',
    state: () => {
        return {
            user: null
        };
    },
    getters: {
        isConnected: (state) => {
            return state.user != null;
        }
    },
    actions: {
        login(login, password) {
            //appel serveur
            this.user = { name: 'Bob' };
        }
    }
});