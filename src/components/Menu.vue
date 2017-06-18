<template lang="html">
  <div class="ui compact fixed inverted vertical labeled icon menu edited">
    <a class="item" @click="addNote"><i class="plus icon"></i> Add Note</a>
  </div>
</template>

<script>
export default {
  methods: {
    addNote () {
      this.$emit('addNote')
    }
  }
}
</script>

<style lang="css">
.edited{
  height: 100%;
  margin-right: 5px;
}
</style>
