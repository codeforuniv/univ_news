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
          <v-virtual-scroll :items="items" :item-height="60" height="500">
            <template v-slot="{ item }">
              <v-divider></v-divider>
              <v-list-item>
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
                <v-col cols="6">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-col>
                <v-list-item-action>
                  <v-btn depressed small :href="item.url" target="_blank">
                    公式HPへ
                    <v-icon color="orange darken-4" right>
                      mdi-open-in-new
                    </v-icon>
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
export default {
  data() {
    return {
      items: [
        {
          name: '東京大学',
          title: 'ニュース1',
          url: 'https://www.u-tokyo.ac.jp/',
          date: new Date()
        },
        {
          name: '愛媛大学',
          title: 'ニュース2',
          url: 'https://www.ehime-u.ac.jp/',
          date: new Date()
        },
        {
          name: '愛媛大学',
          title: 'ニュース2',
          url: 'https://www.ehime-u.ac.jp/',
          date: new Date()
        }
      ]
    }
  }
}
</script>
