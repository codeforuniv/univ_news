<template>
  <v-container fluid>
    <v-row no-gutters justify="center">
      <v-data-table
        :headers="headers"
        :items="posts"
        :items-per-page="100"
        :search="search"
        multi-sort
        class="elevation-1"
      >
        <template v-slot:item.img="{ item }">
          <v-img
            :src="item.img"
            :alt="item.name"
            height="100"
            width="150"
          ></v-img>
        </template>
        <template v-slot:item.date="{ item }">
          {{ item.date | formatDate }}
        </template>
        <template v-slot:item.url="{ item }">
          <v-btn depressed small :href="item.url" target="_blank">
            公式HPへ
            <v-icon color="orange darken-4" right>mdi-open-in-new</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store }) {
    await Promise.all([store.dispatch('news/FETCH_NEWS')])
  },
  data() {
    return {
      search: '',
      headers: [
        {
          sortable: false,
          value: 'img',
          width: '10%',
          class: 'orange lighten-1'
        },
        {
          text: '更新日時',
          value: 'date',
          width: '10%',
          class: 'orange lighten-1'
        },
        {
          text: '大学',
          value: 'name',
          width: '15%',
          class: 'orange lighten-1'
        },
        {
          text: 'タイトル',
          value: 'title',
          width: '50%',
          class: 'orange lighten-1'
        },
        {
          text: 'リンク',
          value: 'url',
          width: '15%',
          class: 'orange lighten-1'
        }
      ]
    }
  },
  computed: {
    ...mapState('news', ['posts'])
  }
}
</script>
