<template>
  <v-container class="mx-10">
    <v-row class="headline">対象大学と参照リスト</v-row>
    <v-row justify="left">
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          {{ item.name }} : {{ item.url }}
        </v-list-item>
      </v-list>
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
          url: 'https://www.s.u-tokyo.ac.jp/ja/press/2020/'
        },
        {
          name: '国際教養大学',
          url: 'https://web.aiu.ac.jp/aiutopics/'
        },
        {
          name: '国際基督教大学',
          url: 'https://www.icu.ac.jp/news/'
        }
      ]
    }
  }
}
</script>
