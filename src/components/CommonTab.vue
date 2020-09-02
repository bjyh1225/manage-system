<template>
  <div class="tabs">
    <el-tag
      size="small"
      :key="tag.name"
      v-for="tag in tags"
      :closable="tag.name !== 'home'"
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >{{tag.label}}</el-tag>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    computed: {
      ...mapState({
        tags: state => state.tab.tabsList
      })
    },
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      ...mapMutations({
        close: 'closeTab'
      }), 
      handleClose(tag) {
        this.close(tag)
      },
      changeMenu(item) {
        this.$router.push({name: item.name})
        this.$store.commit('selectMenu', item)
      }
    }
  }
</script>

<style scoped>
  .tabs {
    padding: 20px;
  }
  .tabs .el-tag{
    margin-right: 15px;
    cursor: pointer;
  }
</style>

