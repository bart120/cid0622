<script setup>
import Menubar from 'primevue/menubar';
</script>

<script>
    export default{
        data(){
            return {toto:'test'};
        }
    }
</script>

<template>
    {{toto}}
    <nav>
        <Menubar></Menubar>
    </nav>
</template>