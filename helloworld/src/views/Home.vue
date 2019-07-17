<template>
  <div class="home">
    我是homePage

    <codemirror class="test">{{this.$store.state.count}}</codemirror>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { codemirror } from 'vue-codemirror'

require('codemirror/mode/python/python.js')
require('codemirror/addon/fold/foldcode.js')
require('codemirror/addon/fold/foldgutter.js')
require('codemirror/addon/fold/brace-fold.js')
require('codemirror/addon/fold/xml-fold.js')
require('codemirror/addon/fold/indent-fold.js')
require('codemirror/addon/fold/markdown-fold.js')
require('codemirror/addon/fold/comment-fold.js')
export default {
  name: 'home',
  comments:{

    codemirror

  }
}
</script>

<style>
  .test{
    display: block;
    border:1px solid #000000;
    width: 250px;
    height: 250px;
    background-color: #1d90e6;
  }

</style>
