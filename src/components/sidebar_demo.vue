<template>
  <ul>
    <li v-for="(item,index) in menu" :key="'menu'+index">
      <router-link :to="item.path">{{item.name}}</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "cSidebar",
  props: [],
  data() {
    return {
      menu: [
        {
          name: "demo1",
          path: "demo1"
        },
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
