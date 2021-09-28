<template>
  <ul>
    <li v-for="(item,index) in menu" :key="'menu'+index">
      <router-link :to="item.path">{{item.name}}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "cSidebar3",
  props: [],
  data() {
    return {
      menu: [
        {
          name: "实践一",
          path: "practice1"
        },
        {
          name: "实践一",
          path: "practice2"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {},
  mounted() {}
};
</script>

<style scoped>
</style>
