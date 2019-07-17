<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
      <el-container>
        <el-aside>
            <NavMenu :manuData="menuData"></NavMenu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
  </div>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue'
export default {
  components: { NavMenu },
  data(){
    return{
      activeIndex :'home',
      //构造菜单数据
      //第一层数据
      menuData:[
        {
          //一级实体
          entity:{
            id:0,
            icon:'el-icon-message',
            alias:'导航一'
          },
          childs:[{
            entity:{
              id:1,
              alias:'分组一'
            },
            childs:[{
              entity:{
                id:2,
                name:'home',
                alias:'选项一'
              }
            }]
          }
          ]
        },

        {
          //一级实体
          entity:{
            id:3,
            icon:'el-icon-message',
            alias:'导航二'
          },
          childs:[{
            entity:{
              id:4,
              alias:'分组二'
            },
            childs:[{
              entity:{
                id:5,
                name:'about',
                alias:'选项二'
              }
            }]
          }
          ]
        },

        {
          //一级实体
          entity:{
            id:6,
            icon:'el-icon-message',
            alias:'导航三'
          },
          childs:[{
            entity:{
              id:7,
              alias:'分组三'
            },
            childs:[{
              entity:{
                id:8,
                name:'other',
                alias:'选项三'
              }
            }]
          }
          ]
        }

      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
