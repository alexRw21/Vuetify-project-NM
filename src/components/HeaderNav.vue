<template>
  <header>
    <nav>
      <ul class="flex items-center space-x-8">
        <li>
          <RouterLink
            to="/"
            ><img  src="../assets/house-solid.svg"/> </RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/addUser"
            > <img src="../assets/user-plus-solid.svg"/>  </RouterLink
          >
        </li>
        <li>
          <RouterLink to="/usersList" ><img src="../assets/users-solid.svg"/></RouterLink>
        </li>
        <li>
          <RouterLink to="/carList" ><img src="../assets/car-solid.svg"/></RouterLink>
        </li>
        <li>
          <RouterLink to="/myRes" ><img src="../assets/address-book-solid.svg"/></RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
ul{
  display: flex;
  justify-content: end;
  margin-right: 10px;
  margin-top: 10px;
}
li{
  margin-left: 20px;
}

img{
  height: 40px;
  width: 40px;

}
img:hover {
  transform: scale(1.5);
}
</style>