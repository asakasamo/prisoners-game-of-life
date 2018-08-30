<template>
   <header>
      <div>
         <b-link to="/" class="header-title">
            <div class="logo mr-2"></div>
            <h4>The Prisoner's Game of Life</h4>
         </b-link>
      </div>
      <div>
         <ul class="list-unstyled header-nav">
            <li>
               <b-link to="/learn" :class="activePageClass('learn')">Learn</b-link>
            </li>

            <li>
               <b-link to="/play" :class="activePageClass('play')">Play</b-link>
            </li>
         </ul>
      </div>
   </header>
</template>

<script>
export default {
   methods: {
      activePageClass(page) {
         if (this.$route.name === page) {
            return "active-page";
         }
         return "";
      }
   }
};
</script>


<style lang="scss" scoped>
.active-page {
   border-bottom: 5px solid palegoldenrod;
   color: palegoldenrod;
   font-weight: 900;
}

div {
   transition: all 0.2s;
}

.header-title {
   display: flex;
   align-items: center;
}

header {
   background-color: rgba(70, 131, 180, 0.8);
   display: flex;
   justify-content: space-between;
   color: white;
   padding: 0 50px;
}

h4 {
   margin-top: 5px;
}

.header-nav {
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 150px;

   height: 100%;
}

a {
   color: white;
}
a:hover,
a:hover * {
   text-decoration: none;
   font-weight: 900;
   color: palegoldenrod;
}

li a {
   padding: 5px;
}

.logo {
   width: 25px;
   height: 25px;
   background-image: url("../assets/logo-white.png");
}

.header-title:hover .logo {
   background-image: url("../assets/logo-color.png");
}
</style>
