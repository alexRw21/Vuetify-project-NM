<script>
export default {
data(){
  return {
    users: [{ id:1, name: 'Louis Whiskas' },
            { id:2, name: 'Jackie Hills' },
            { id:3, name: 'Amaury Royality' },
            { id:4, name: 'Lixfe Félix' },
            { id:5, name: 'Corentin Solimo' },
            { id:6, name: 'Patrick PureViande' }
        
        ]
  }
}
}



</script>

<template>
  <div>
    <h1 class="title primary">Liste des utilisateurs</h1>
    <div
      v-for="{ id, name } in users"
      :key="id"
      class="mt-3 shadow-md rounded bg-white px-2 flex items-center"
    >
      <div class="flex flex-col">
        <h3 class="mb-2 text-3xl font-semibold">{{ name }}</h3>
      </div>
    </div>
  </div>
</template>

<style>
input{
  background-color: rgb(18, 33, 167);
}
.btnDel{
  background-color: rgb(228, 26, 26);
  color: white;
  font-weight: bold;
}
.btnEd{
  background-color: rgb(38, 38, 219);
  color: white;
  font-weight: bold;
}
</style>