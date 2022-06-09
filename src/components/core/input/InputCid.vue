<script setup>
    import InputText from 'primevue/inputtext';
</script>

<script>
export default{
    props:{
        label: String
    },
    computed:{
        displayColor(){
            return this.$attrs.modelValue == '' ? 'background-color: grey;': '';
        }
    },
    mounted() {
        console.log('props', this.$props);
        console.log('attrs', this.$attrs);
    }
}
</script>


<template>

    <label>{{this.label}}</label>
    <InputText :style="displayColor" v-bind="this.$attrs" />
</template>