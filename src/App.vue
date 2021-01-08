<template>
  <div id="app">
    <Box
      width="100px"
      height="100px"
      margin="10px auto"
      :bgc="test"
      transition="1.5s linear"
    >
    1
    </Box>
  </div>
</template>

<script>
import Box from "./components/Box/Box";

export default {
  name: "App",
  components: {
    Box,
  },
  data() {
    return {
      test: "red",
    };
  },
  created() {
    this.animation()
  },
  methods: {
    animation() {
      let index = 0
      const colors = ['#feca57', '#ff6b6b', '#48dbfb', '#1dd1a1']

      setInterval(() => {
        this.test = colors[++index % 4]
      }, 1500)
    }
  }
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
