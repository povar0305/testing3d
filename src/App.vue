<template>
  <v-app>
    <v-row justify="center">
      <h3>Выберите тему</h3><v-row justify="space-around">
      <v-col >
        <v-sheet >
          <v-chip-group mandatory active-class="primary--text">
            <v-chip v-for="tag in tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-col>
    </v-row>
    </v-row>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    //
  },

  data: () => ({
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ],
    }),
};
</script>
<style>
#app {
  padding: 3rem;
}
</style>