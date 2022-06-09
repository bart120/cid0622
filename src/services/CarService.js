import axios from 'axios';

const url = 'https://formation.inow.fr/demo/api/v1/cars';

export default class {
    getCars() {
        //console.log('début getcars');
        return axios.get(url);/*.then((response) => {
            console.log('data', response.data);
            return response.data;
        });*/
        //console.log('fin getcars');
    }

}
