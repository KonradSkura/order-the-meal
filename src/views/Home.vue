<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="2"
      >
        <v-sheet
          rounded="lg"
          min-height="268"
        >
          <p class="text-center pt-2">Filtry ...</p>
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        sm="10"
      >
        <v-sheet
          min-height="70vh"
          rounded="lg"
        >
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="restaurant in restaurants"
                :key="restaurant.id"
                cols="4"
              >
                <restaurant-card :restaurant="restaurant" />
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import RestaurantCard from '@/components/RestaurantCard.vue'

export default {
  name: 'Home',
  components: { RestaurantCard },
  computed: mapState({
      restaurants: state => state.restaurants
  })
}
</script>
