<template>
  <v-card
    :loading="loading"
    class="mx-auto"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="restaurant.image"
    ></v-img>

    <v-card-title>{{ restaurant.title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          {{ restaurant.rating.score }} ({{ restaurant.rating.count }})
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
          {{ getCategories() }}
      </div>

      <div>{{ restaurant.description }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Zamów!
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

  export default {
    props: ['restaurant'],
    computed: mapState({
        restaurantCategories: state => state.restaurantCategories
    }),
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve() {
        this.restaurantCategories.find((category) => {
          return this.restaurant.typeId === category.id
        })
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      getCategories() {
        return this.restaurant.typeId.map((type) => 
          this.restaurantCategories.find((category) => type === category.id).name
        ).toString().replace(',', ', ')
      }
    },
  }
</script>