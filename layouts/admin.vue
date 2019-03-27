<template>
  <div>
    <ToolBar/>
    <nuxt/>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
export default {
  components: {
    ToolBar
  }
};
</script>
<style>
html {
  font-family: "Open Sans", sans-serif;
}

body {
  margin: 0;
}
</style>
