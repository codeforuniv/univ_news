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

      <!-- <v-col class="text-center">
        <v-card class="mx-auto">
          <v-card-title class="white--text orange darken-4">
            最近のニュース
            <v-spacer></v-spacer>
            <v-btn color="white" class="text--primary" fab small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>
          <v-virtual-scroll :items="posts" :item-height="100" height="1000">
            <template v-slot="{ item }">
              <v-divider></v-divider>
              <v-list-item>
                <v-col cols="2">
                  <v-list-item-content>
                    <v-img :src="item.img" height="55"></v-img>
                  </v-list-item-content>
                </v-col>
                <v-col cols="2">
                  <v-list-item-content>
                    <v-list-item-title>{{
                      item.date | formatDate
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-col>
                <v-col cols="2">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-col>
                <v-col cols="5">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-col>
                <v-list-item-action>
                  <v-btn depressed small :href="item.url" target="_blank">
                    公式HPへ
                    <v-icon color="orange darken-4" right
                      >mdi-open-in-new</v-icon
                    >
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-virtual-scroll>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store }) {
    await Promise.all([store.dispatch('news/FETCH_NEWS')])
  },
  computed: {
    ...mapState('news', ['posts'])
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
  }
}
</script>
