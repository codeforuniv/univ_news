<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <v-card class="mx-auto">
          <v-card-title class="white--text orange darken-4">
            最近のニュース
            <v-spacer></v-spacer>
            <v-btn color="white" class="text--primary" fab small>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-card-title>
          <v-virtual-scroll :items="posts" :item-height="60" height="500">
            <template v-slot="{ item }">
              <v-divider></v-divider>
              <v-list-item>
                <v-col cols="2">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.date | formatDate }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-col>
                <v-col cols="2">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.univ_name }}</v-list-item-title>
                  </v-list-item-content>
                </v-col>
                <v-col cols="6">
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
      </v-col>
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
  }
}
</script>
