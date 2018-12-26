<!-- Lang -->
<template>
  <div>
    <Select v-model="lang" style="width:200px" @on-change="changeLang">
      <Option v-for="item in langList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  </div>
</template>

<script>
  import languages from './../locale/languages'
  export default {
    name: 'Lang',
    data() {
      return {
        langList: languages,
        lang: 'zh-CN'
      };
    },

    props: [],

    components: {},

    created() {},

    mounted() {},

    methods: {
      changeLang(value) {
        this.lang = value;
        this.$i18n.locale = value;
      }
    },

    computed: {},

    watch: {}
  }

</script>
<style lang='less' scoped>
</style>
<style lang='less'>
</style>
