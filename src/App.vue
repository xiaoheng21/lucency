<template>
  <div id="app">
    <!-- <input type="text" v-model="test"> -->
    <Box />
    <Box
      width="100px"
      height="100px"
      margin="10px auto"
      :bgc="test"
      transition="1.5s linear"
    >
      {{ " " }}
    </Box>
    <Flex width="50%" margin="10px auto">
      <Box
        :sx="{
          '@media screen and (min-width: 900px)': {
            bgc: 'blue'
          }
        }"
        bgc='red'
        width="50%"
        height="100px"
      >
      </Box>
      <Box width="50%" height="100px" bgc="#ee5253" />
    </Flex>
  </div>
</template>

<script>
import Box from "./components/Box/Box";
import Flex from "./components/Flex/Flex";

export default {
  name: "App",
  components: {
    Box,
    Flex,
  },
  data() {
    return {
      test: "#00d2d3",
    };
  },
  created() {
    this.animation();
  },
  methods: {
    animation() {
      let index = 0;
      const colors = [
        "#feca57",
        "#ff6b6b",
        "#48dbfb",
        "#1dd1a1",
        "#f368e0",
        "#00d2d3",
      ];

      setInterval(() => {
        this.test = colors[++index % 6];
      }, 1500);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
