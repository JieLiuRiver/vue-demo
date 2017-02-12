<template>
    <div class="jackworks-wrapper">
      <Row style="padding:10px 0">
        <i-col span="22"><span style="color: #fff">-</span></i-col>
        <i-col span="2">
          <i-button type="ghost" v-link="{name:'j-index'}">返回</i-button>
        </i-col>
      </Row>

      <Row style="background:#f2f2f2;padding:20px">
        <i-col span="11">
          <Card :bordered="false">
            <p slot="title">PC端</p>
            <div v-for="itemleft in projectUrl_pc" track-by="$index" @click="checkProject(itemleft)">
              <i-button type="text">{{itemleft.name}}</i-button>
            </div>

          </Card>
        </i-col>
        <i-col span="11" offset="2">
          <Card :bordered="false">
            <p slot="title">移动端</p>
            <div v-for="itemright in projectMobileData">
              <i-button type="text" v-link="{name:'j-workshow', query: itemright.queryData}">{{itemright.name}}</i-button>
            </div>
          </Card>
        </i-col>
    </Row>
    </div>
</template>
<style>

</style>
<script>
  export default{
    props: {},
    data() {
      return {
        projectUrl_pc: this.$store.state.projectUrlData,
        projectMobileData: this.$store.state.projectMobileData,
      }
    },
    methods: {
      checkProject(item) {
        window.open(item.url)
      }
    }
  };
</script>
