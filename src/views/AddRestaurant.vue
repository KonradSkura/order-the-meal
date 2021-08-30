<template>
  <v-container>
    <v-row class="justify-center">
      <v-col
        cols="12"
        sm="10"
      >
      <v-sheet
        rounded="lg"
      >
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="restaurantName"
                  :counter="30"
                  label="Nazwa restauracji"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="restaurantDescription"
                  :counter="256"
                  label="Krótki opis restauracji"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="12"
              >
                <v-text-field
                  v-model="restaurantPhoto"
                  label="Zdjęcie Restauracji"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="12"
              >
                <v-select
                  v-model="restaurantType"
                  :items="restaurantCategories"
                  item-text="name"
                  item-value="id"
                  label="Wybierz serwowaną kuchnie"
                  multiple
                  chips
                  persistent-hint
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  class="mr-4"
                  type="submit"
                  :disabled="!valid"
                  @click="submit"
                >
                  Wyślij
                </v-btn>
                <v-btn @click="clear">
                  Wyczyść formularz
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'AddRestaurant',
  computed: mapState({
    restaurantCategories: state => state.restaurantCategories
  }),
  data: () => ({
    valid: true,
    restaurantName: '',
    restaurantDescription: '',
    restaurantPhoto: '',
    restaurantType: null
  }),
  methods: {
    ...mapActions([
      'addRestaurant'
    ]),
    submit () {
      console.log('submit', this.restaurantType)
      this.addRestaurant({
        title: this.restaurantName,
        description: this.restaurantDescription,
        image: this.restaurantPhoto,
        typeId: this.restaurantType
      })
      this.$router.push('/')
    },
    clear () {
      this.restaurantName = ''
      this.restaurantDescription = ''
      this.restaurantType = ''
    },
  }
}
</script>
