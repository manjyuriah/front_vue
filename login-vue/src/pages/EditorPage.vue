<template>
  <div class="editor-page">
    <editor-header />
    <p>영상편집 페이지 입니다.</p>
  </div>
</template>

<script>
import EditorHeader from '../components/EditorHeader.vue'

export default {
  name: 'EditorPage',
  components: {
    EditorHeader,
  }
}
</script>

<style scoped>
  p {
    margin: 100px;
    text-align: center;
  }
</style>