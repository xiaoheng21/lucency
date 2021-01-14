<template>
  <div>
    <Flex width="50%" margin="10px auto">
      <Box
        static
        :sx="{
          ':hover': {
            bgc: '#fff'
          }
        }"
        width="50%"
        height="100px"
        bgc="#ee5253"
      />
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
};
</script>
