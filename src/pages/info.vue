<template>
  <v-container class="mx-10">
    <v-row class="headline">対象大学と参照リスト</v-row>
    <v-row>
      <v-list>
        <v-list-item v-for="(univ, i) in univs" :key="i"
          >{{ univ.name }} : {{ univ.url }}</v-list-item
        >
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store }) {
    await Promise.all([store.dispatch('news/FETCH_UNIVERSITY')])
  },
  computed: {
    ...mapState('news', ['univs'])
  }
}
</script>
