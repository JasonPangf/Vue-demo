<template>
  <el-menu router="true" :default-openeds="['1', '3']" :default-active="activeIndex">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="home">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组二</template>
          <el-menu-item index="about">选项二</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组三</template>
          <el-menu-item index="other">选项三</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
  </el-menu>
</template>

<script>
    export default {
      name: "NavMenu",
      props:[ 'menuData' ]
    }
</script>

<style scoped>

</style>
