<script setup>

</script>

<template>
  <div class="navbar">
 <div class="nav">
  <p>Where in the world</p>
  <div class="subnav">
    <img src="../assets/Pathmoon.png" alt="">
    <button class="btn"><i class="fas fa-sun-o"></i>Dark mode</button>
  <p></p>
</div>
 </div>
</div>
</template>

<style scoped>
.navbar{
  max-width: 375px;
  

}
.nav{
  display: flex;
  flex-direction: row;
  gap: 124px;
  padding: 30px 15px;
 
}
.nav p{
  color: #111517;
font-family: Nunito Sans;
font-size: 14px;
font-style: normal;
font-weight: 800;
line-height: 20px; /* 142.857% */
}

.subnav{
  display: flex;
  flex-direction: row;
  gap: 3px;

}

.subnav img{
  width: 16px;
height: 16px;
}
nav p{
color: #111517;
font-family: Nunito Sans;
font-size: 14px;
font-style: normal;
font-weight: 800;
line-height: 20px; /* 142.857% */
}



button{
  border: none;
  background-color: #FFF;;
  color: #111517;
font-family: Nunito Sans;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
</style>