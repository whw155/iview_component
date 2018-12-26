<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <div>
            <a href="./../index.html">
              <img src="./assets/images/logo.png" alt="logo" class="logo-default" style="width:50px;margin-top:15px;vertical-align: sub;">
            </a>
            <span style="color:#fff;opacity:0.9;font-size:17px;margin-left:7px;">个人平台</span>
          </div>

        </Header>
        <Layout>
          <Sider hide-trigger :style="{background: '#fff'}">
            <Menu :activeName="$store.state.selectedMenuId" theme="light" width="auto" :openNames="[$store.state.selectedMenuId.split('-')[0]]">
              <Submenu :name="item.level" :to="item.url" v-for="(item,index) in meau" :key="index">
                <template slot="title">
                  <Icon :type="item.icon"></Icon>
                  {{item.menuName}}
                </template>
                <MenuItem :name="child.level" :to="child.url" v-for="child in item.child" :key="child.level" >{{child.menuName}}</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb :style="{margin: '10px 0'}" separator=">" target>
              <BreadcrumbItem :to="breadcrumb.url" v-for="(breadcrumb,index) in $store.state.breadcrumbList" :key="index" >{{breadcrumb.name}}</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '75vh', background: '#fff'}">
              <router-view></router-view>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>

  </div>
</template>
<script>
  import meau from './assets/js/meau';
  export default {
    data() {
      return {
        meau: meau.menus

      }
    },
    components: {

    }
  }

</script>
<style scoped>
  .layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .ivu-layout-header {
    height: 50px;
    line-height: 50px;
  }

</style>
<style lang="less">


</style>
