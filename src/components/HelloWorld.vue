<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: 'This is a test component.'
  }
}
</script>