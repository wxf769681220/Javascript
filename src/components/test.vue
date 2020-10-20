<template>
  <div class="test">
    {{age}}
    <ul class="menu">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'test',
  inject: ['age'],
  props: {
    num: {
      type: String,
      default: ''
    },
    b: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      count: 100
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="stylus"></style>
