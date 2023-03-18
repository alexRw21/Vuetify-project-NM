<script>
// import { useRoute, useRouter } from "vue-router";
// import { useQuery, useMutation } from "vue-query";
// import api from "../api";
// import UserForm from '../components/UserForm.vue';


// const route = useRoute();
// const router = useRouter();
// const {  data: user } = useQuery(
//   "users",
//   async () => (await api.get(`/usersList/${route.params.id}`)).data
// );
// const { mutate: update } = useMutation(
//   "cats",
//   async (value) => await api.put(`/usersList/${route.params.id}`, value)
// );
// const updateUser = (userForm) => {
//   update(userForm.value);
//   router.push({ path: "/usersList" });
// };

export default {
data(){
  return {
    reserv: [
      {
        id: 1,
        name: 'Louis Whiskas',
        car: 'Voiture 1',
        startDate: '27/12/2022',
        endDate: '12/01/2023'
      },
      {
        id: 2,
        name: 'Jacquie Hills',
        car: 'Voiture 2',
        startDate: '20/02/2023',
        endDate: '17/03/2023'
      },
      {
        id: 3,
        name: 'Amaury Royality',
        car: 'Voiture 3',
        startDate: '10/02/2023',
        endDate: '24/06/2023'
      },
      {
        id: 4,
        name: 'Lixfe Félix',
        car: 'Voiture 4',
        startDate: '27/04/2023',
        endDate: '11/08/2023'
      },
      {
        id: 5,
        name: 'Corentin Solimo',
        car: 'Voiture 5',
        startDate: '20/10/2023',
        endDate: '13/11/2023'
      },
      {
        id: 6,
        name: 'Patrick PureViande',
        car: 'Voiture 6',
        startDate: '27/10/2023',
        endDate: '23/11/2023'
      }
    ]
  }
}
}

</script>

<template>
  <!-- <UserForm mode="edit" v-bind="user" @on-submit="updateUser" v-if="user" /> -->
  <div   v-for="{id, name, car,startDate,endDate} in reserv"
      :key="id">
      <p class="mt-3"><span>Utilisateur:</span> {{ name }} - {{ car }} - <span> Début:</span> {{ startDate }} <span>Fin:</span>  {{ endDate }}</p> 

  </div>
</template>

<style>
span{
  font-weight: bolder;
}
</style>