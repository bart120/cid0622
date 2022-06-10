<script setup>
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
import { useUserStore } from '../../../store/userStore';
    import InputCid from '../../core/input/InputCid.vue';
    import InputCidMail from '../../core/input/InputCidMail.vue';

    const {login} = useUserStore();
</script>

<script>
    export default{
        /*setup(){
            const store = useUserStore();
            return { login = store.login };   
        },*/
        data(){
            return{ user:{login:'', password: ''}, valid:false};
        },
        methods:{
            submit(/*event*/){
                //event.preventDefault();
                console.log(this.user);
                this.login(this.user.login, this.user.password);
            },
            statusChange(state){
                //console.log('state', state);
                this.valid = state;
            }
        }
    }
</script>

<template>
    <h1>Authentification</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
            
            <input-cid-mail @statusChange="statusChange" v-model="user.login" label="Login"/>
           
        </div>
        <div>
           <InputCid pause="dans 5 min" type="password" v-model="user.password" label="Mot de passe" />
        </div>
        <div>
            <Button type="submit" :disabled="!this.valid">Connexion</Button>
        </div>
    </form>
</template>