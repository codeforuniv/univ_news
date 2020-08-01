<template>
  <v-container fluid>
    <v-row no-gutters justify="center">
      <v-card>
        <v-card-title>
          Covid19関連のニュース
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="更新日時,大学,タイトルに含まれる文字列から検索"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="covid19"
          :items-per-page="100"
          :search="search"
          multi-sort
          class="elevation-1"
        >
          <template v-slot:item.img="{ item }">
            <v-img
              v-if="$vuetify.breakpoint.xs"
              :src="item.img"
              :alt="item.name"
              height="40"
              width="150"
            ></v-img>
            <v-img
              v-else
              :src="item.img"
              :alt="item.name"
              height="100"
              width="150"
            ></v-img>
          </template>
          <template v-slot:item.date="{ item }">{{
            item.date | formatDate
          }}</template>
          <template v-slot:item.url="{ item }">
            <v-btn depressed small :href="item.url" target="_blank">
              公式HPへ
              <v-icon color="orange darken-4" right>mdi-open-in-new</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store }) {
    await Promise.all([store.dispatch('news/FETCH_COVID19')])
  },
  data() {
    return {
      search: '',
      headers: [
        {
          sortable: false,
          filterable: false,
          value: 'img',
          width: '10%',
          class: 'blue lighten-1'
        },
        {
          text: '更新日時',
          value: 'date',
          width: '10%',
          class: 'blue lighten-1'
        },
        {
          text: '大学',
          value: 'name',
          width: '15%',
          class: 'blue lighten-1'
        },
        {
          text: 'タイトル',
          value: 'title',
          width: '50%',
          class: 'blue lighten-1'
        },
        {
          sortable: false,
          filterable: false,
          text: 'リンク',
          value: 'url',
          width: '15%',
          class: 'blue lighten-1'
        }
      ]
    }
  },
  computed: {
    ...mapState('news', ['covid19'])
  }
}
</script>
