<script setup>
import CarService from '../../../services/CarService';

</script>
<script>
const carService = new CarService;
export default{
    data(){
        return {cars: []};
    },
    beforeMount(){
        carService.getCars().then((response)=>{
            this.cars = response.data;
        }).catch((err) =>{
            alert(err.message);
        });
        //console.log('fin beforemount');
    }
}
</script>

<template>
    <h1>Liste des voitures</h1>
    <table>
        <thead>
            <tr><th>Modèle</th><th>Prix</th></tr>
        </thead>
        <tbody>
            <tr v-for="car in cars" :key="car.id">
                <td>{{car.model}}</td>
                <td>{{car.price}} €</td>
            </tr>
        </tbody>
    </table>
</template>