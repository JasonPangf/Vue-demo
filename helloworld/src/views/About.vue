<template>
  <div class="about">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

    <codemirror style="width: 150px;height: 150px;">count的值：{{this.$store.state.count}}</codemirror>
    <button onclick="add">++</button>
    <button onclick="dee">--</button>
  </div>
</template>


<script>
  import { codemirror } from 'vue-codemirror'

  require("codemirror/mode/python/python.js")
  require('codemirror/addon/fold/foldcode.js')
  require('codemirror/addon/fold/foldgutter.js')
  require('codemirror/addon/fold/brace-fold.js')
  require('codemirror/addon/fold/xml-fold.js')
  require('codemirror/addon/fold/indent-fold.js')
  require('codemirror/addon/fold/markdown-fold.js')
  require('codemirror/addon/fold/comment-fold.js')

  export default {
    comments:{
      codemirror
    },
    methods:{
      add:function () {
        this.$store.commit('add')
      }
    }
  }
</script>
