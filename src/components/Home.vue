<template>
   <div class="title-page">
      <div class="title-text">
         <h1>The Prisoner's Game of Life</h1>
         <h2>A Collision of Theories</h2>
      </div>

      <div class="title-nav">
         <div class="title-link">
            <b-link to="/info">
               <div class="title">
                  Learn
               </div>
               <div class="caption">
                  How it works
               </div>
            </b-link>
         </div>

         <div class="title-link">
            <b-link to="/info">
               <div class="title">
                  Play
               </div>
               <div class="caption">
                  See it in action
               </div>
            </b-link>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped>
* {
   transition: all 0.3s;
}

.title-page {
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   text-align: center;
   min-height: 100vh;
}

.title-text {
   margin-top: 150px;
   margin-bottom: 50px;
   font-weight: bolder;
}

.title-nav {
   display: flex;
   justify-content: center;
}

.title-link {
   a:hover {
      text-decoration: none;
      color: inherit;
   }
   a {
      color: white;
      height: 100%;
   }

   width: 200px;
   height: 100px;
   margin: 0 50px;
   color: white;
   border-radius: 20px;
   background-color: steelblue;
   overflow: hidden;

   display: flex;
   flex-direction: column;
   div {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
   .title {
      font-size: 2.5em;
      font-weight: bold;
   }
   .caption {
   }
}

.title-link:hover {
   background-color: skyblue;
}

h1 {
   font-weight: 800;
   font-size: 4em;
}
h2 {
   font-weight: 600;
}
</style>