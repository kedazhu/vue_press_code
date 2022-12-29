<template>
  <div class="abstract-wrapper">
    <NoteAbstractItem
      v-for="(item,index) in currentPageData"
      :key="item.path"
      :item="item"
      :currentPage="currentPage"
      :currentTag="currentTag"
      :index_postion_num="index"
    />
  </div>
</template>

<script>
import NoteAbstractItem from './NoteAbstractItem'

export default {
  components: { NoteAbstractItem },
  props: ['data', 'currentPage', 'currentTag'],
  computed: {
    currentPageData () {
      const start = this.currentPage * 7 - 7
      const end = this.currentPage * 7
      const qwq = this.data.slice(start, end)
      return this.data.slice(start, end)
    }
  },
}
</script>

<style lang="stylus" scoped>
.abstract-wrapper
  width 100%
</style>
