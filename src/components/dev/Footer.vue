<template>
  <div class="footer">
    {{ field }}
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    field: "",
  },
};
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: red;
  color: white;
  text-align: center;
}
</style>
