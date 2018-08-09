<template>   
   <div id="app">
      <header>
         <h1>Prisoner's Dilemma Meets Conway's Game of Life</h1>
      </header>

      <div>
         
      </div>

      <router-view/>
   </div>
</template>

<style lang="scss">
* {
   overflow: hidden;
}

body {
   background-color: #ddd;
   padding: 0;
   margin: 0;
}

#app {
   font-family: "Avenir", Helvetica, Arial, sans-serif;
   text-align: center;
   color: white;
}

header {
   background-color: #555;
}
</style>
