<script>
export default {
data(){
  return {
    items: [{ id:1, name: 'Voiture 1', model: 'BMW', style :"Classieux" },
            { id:2, name: 'Voiture 2', model: 'Peugeot', style :"Familial"  },
            { id:3, name: 'Voiture 3', model: 'Range Rover', style :"Terrain"  },
            { id:4, name: 'Voiture 4', model: 'Mustand', style :"Course"  },
            { id:5, name: 'Voiture 5', model: 'Mini Cooper', style :"Passe-Partout"  },
            { id:6, name: 'Voiture 6', model: 'Mercedes', style :"Cabriolet"  }
        
        ],
        car: {
        name: '',
        model: '',
        style: ''
      }
    };
  },
  methods: {
    customSubmit() {
      // do some checking here
      this.items.push(this.car)
      this.car = {name:'', model:'', style:''};
      console.log(this.cars)

    },


  }

    
  }

</script>

<template>
  <h1>Liste des Véhicules</h1>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <li class="my-5 border-b-black border-b " :key="item.name" v-for="item in items">
  <span>Numéro:</span> {{ item.name }} : <span>Marque</span> {{ item.model }} <span>Style:</span> {{ item.style }}
</li>
</v-card>

<div class="form">
  <h2>Ajoutez un véhicule</h2>
  <div class="inputs">
    
    <form @submit.prevent="customSubmit">
      <label>Numéro du Véhicule: </label>
      <input type="text" required v-model="car.name" id="name">
      <label>Marque: </label>
      <input type="text" required v-model="car.model" id="model">
      <label>Style: </label>
      <input type="text" required v-model="car.style" id="style">
    </form>
  </div>
  <h2>Vous avez complétez:</h2> 
  <div class="validation">
   
    <span>Numéro du Véhicule: {{car.name}}</span>
   <span>Marque:  {{car.model}}</span>
    <span>Style: {{car.style}}</span>
    
  </div>
  <div class="divbtn"><button type="submit" class="btn text-white" @click="customSubmit">Ajoutez le véhicule</button></div>
  
  </div>
</template>

<style>
input{
  background-color: rgb(240, 240, 240);
  border:2px solid rgb(138, 132, 132);
  margin-right: 5px;
}
.inputs{
  display: flex;
  justify-content: center;
}
h2{
  display: flex;
  font-weight: bold;
  justify-content: center;
  margin: 10px 0 10px 0;
}
.validation{
  display: flex;
  justify-content: center;
  margin: 0 10px 0 10px;
}
.validation span{
  margin: 10px 0 10px 20px;
}
.btn{
  background-color: rgb(24, 196, 24);
  font-weight: bold;
  padding: 3px;
  border-radius: 5px;
}
.divbtn{
  display: flex;
  justify-content: center;
}
</style>