<script setup>
import { storeToRefs } from 'pinia';
import Menubar from 'primevue/menubar';
import { useUserStore } from '../../store/userStore';

const {isConnected, user} = storeToRefs(useUserStore());
</script>

<script>
    export default{
        /*setup(){
            const store = useUserStore();
            return { isConnected: store.isConnected, user: store.user };
        },*/
        data(){            
            return {
                items: [
                    {
                        label: 'Accueil',
                        icon: 'pi pi-fw pi-file',
                        to: '/'
                    },
                    {
                        label: 'Voiture',
                        icon: 'pi pi-fw pi-file',
                        items: [
                            { label: 'Ajouter', to: '/cars/add' },
                            { label: 'Lister', to: '/cars/list'}
                        ]
                    }
                ]
            };
        }
    }    
</script>

<template>
    <nav>
        <Menubar :model="items">
            <template #end>
                <div v-if="! this.isConnected">
                    <router-link :to="{name:'loginRoute'}">Se connecter</router-link>
                </div>
                <div v-else>
                    Bonjour {{this.user.name}}
                </div>
            </template>
        </Menubar>
    </nav>
</template>