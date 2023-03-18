
<template>
    <h1>Programmer une Réservation</h1>
    <form @submit.prevent="customSubmit">
    <v-card>
  <v-text-field
  label="Date de Début"
  placeholder="DD/MM/YYYY"
  type="date" required v-model="res.startDate" id="startDate"
></v-text-field>
<v-text-field
  label="Date de Fin"
  placeholder="DD/MM/YYYY"
  type="date"
  required v-model="res.endDate" id="endDate"
></v-text-field>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-autocomplete
              v-model="res.name"
              label="Véhicule"
              :items="items"
              type="text" required id="name"
            ></v-autocomplete>
          </v-col>
        </v-row>
        
      </v-container>
    </v-card>
      </form>
        <div class="divbtn"><button type="submit" class="btn text-white" @click="customSubmit">Valider la Réservation</button></div>
      
      <h2>Mes Réservations</h2>
      <li :key="item.name" v-for="item in myres"><span>Véhicule: </span>{{ item.name }} <span>Date de début: </span>{{ item.startDate }} <span>Date de fin: </span>{{ item.endDate }}</li>

    

  </template>
  
  <script>
    export default {
      data(){
        return{
        items: ['Voiture 1','Voiture 2','Voiture 3', 'Voiture 4', 'Voiture 5', 'Voiture 6'],
        values: 'Choisissez un véhicule',
        value: null,
      
      myres:[{
        name: 'Voiture 1',
        startDate: '07/07/2023',
        endDate: '12/09/2023'
      },
      {
        name: 'Voiture 4',
        startDate: '20/04/2023',
        endDate: '17/04/2023'
      },
      {
        name: 'Voiture 5',
        startDate: '02/02/2023',
        endDate: '22/05/2023'
      }],
      res: {
        name:'',
        startDate: '',
        endDate:''
      }
    };
    },
  methods: {
    customSubmit() {
      // do some checking here
      this.myres.push(this.res)
      this.res = {name:'', startDate:'', endDate:''};
      console.log(this.myres)

    },
  }
}
  </script>

<style>
h1{
  font-size: larger;
  font-weight: bold;
  margin:15px 0 15px 15px;
}
span{
  font-weight: bold;
}
.divbtn{
  margin-top: 10px;
}
</style>