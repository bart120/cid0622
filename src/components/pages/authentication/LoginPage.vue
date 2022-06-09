<script setup>
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
    import InputCid from '../../core/input/InputCid.vue';
</script>

<script>
    export default{
        data(){
            return{ user:{login:'', password: ''}};
        },
        methods:{
            submit(/*event*/){
                //event.preventDefault();
                console.log(this.user);
            }
        }
    }
</script>

<template>
    <h1>Authentification</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
            
            <input-cid v-model="user.login" label="Login"/>
           
        </div>
        <div>
           <InputCid pause="dans 5 min" type="password" v-model="user.password" label="Mot de passe" />
        </div>
        <div>
            <Button type="submit">Connexion</Button>
        </div>
    </form>
</template>