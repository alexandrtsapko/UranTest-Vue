<script setup>
import { ref } from 'vue'

const editorContent = ref('')

const applyList = () => {
  document.execCommand('insertUnorderedList')
}

const applyOrderedList = () => {
  document.execCommand('insertOrderedList')
}

const applyBold = () => {
  document.execCommand('bold')
}

const applyItalic = () => {
  document.execCommand('italic')
}

const applyLink = () => {
  const url = prompt('Введіть посилання:')
  if (url) {
    document.execCommand('createLink', false, url)
  }
}

const updateContent = (event) => {
  editorContent.value = event.target.innerHTML
}
</script>

<template>
  <div class="main">
    <button @click="applyList">Додати список</button>
    <button @click="applyOrderedList">Додати нумерований список</button>
    <button @click="applyBold">Жирний</button>
    <button @click="applyItalic">Курсив</button>
    <button @click="applyLink">Посилання</button>
    <div class="editor" contenteditable="true" ref="editor" @input="updateContent"></div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
}
.editor {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
  min-height: 600px;
}
</style>
