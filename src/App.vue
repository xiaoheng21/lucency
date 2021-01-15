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
import { Box, Flex } from "./components";

export default {
  name: "App",
  components: {
    Box,
    Flex,
  },
};
</script>
