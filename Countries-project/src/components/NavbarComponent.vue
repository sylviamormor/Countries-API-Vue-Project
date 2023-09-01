<script setup>

</script>

<template>
  
  
 <div class="nav">
  <p>Where in the world</p>
  <div class="subnav">
    <img src="../assets/Pathmoon.png" alt="">
    <button class="btn"><i class="fas fa-sun-o"></i>Dark mode</button>
  </div>

 </div>

</template>

<style scoped>
.navbar{
  

  

}
.nav{
  display: flex;
  flex-direction: row;
  gap: 4px;
  padding: 30px 15px;
  justify-content: space-between;
 
 
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




@media (min-width: 924px) {
  main{
        padding: 24px 80px;
    }
  .navbar{
    display: flex;
    gap: 940px;

  }

  .subnav img{
    width: 20px;
    height: 20px;
  }



}
</style>