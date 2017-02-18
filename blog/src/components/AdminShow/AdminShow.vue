<template>
    <div class="admin-wrapper">
      <div class="p-header">
        <h3 class="title">Admin Management System</h3>
        <p class="text">It's frequently-used and  it's my solution</p>
        <i-button type="ghost" class="f-ib f-mr20" size="large" @click="viewCode">View on GitHub</i-button>
        <i-button type="ghost" class="f-ib f-mr20" size="large" @click="openW">View Full Screen</i-button>
        <i-button type="ghost" class="f-ib"  size="large" v-link="{name:'j-works'}">Back</i-button>
      </div>
      <div class="content f-pr">

        <iframe class="iframe" :src="projectUrl" width="100%" height="100%" ></iframe>
      </div>
    </div>
</template>
<script>
  export default{
    name: 'adminShow',
    props: {},
    data() {
      return {
        projectUrl: 'http://heliujie.com/public/works/admin/index.html',
        githubCodeUrl: 'https://github.com/stupidWall/admin-project-vue.js-/tree/master'
      }
    },
    methods: {
      openW() {
        window.open(this.projectUrl)
      },
      viewCode(){
        window.open(this.githubCodeUrl)
      }
    }
  };
</script>
<style scoped>
    .p-header{
      padding: 40px 100px;
      background-color: #5FC3E4;
      text-align: center;
      background-image: linear-gradient(120deg, #E55D87, #5FC3E4);
    }
    .title{
      padding: 20px 0;
      text-align: center;
      color: #fff;
      font-size: 50px;
    }
    .text{
      text-align: center;
      font-size: 30px;
      color: #fff;
      font-weight: 700;
      margin-bottom: 30px;
    }
    .ivu-btn{
      background: #4fc08d;
      color: #fff;
      border: 0;
    }
    .content{
      width: 80%;
      margin: 50px auto;
      height: 600px;
      background: #f2f2f2
    }
    .iframe{
      border: 5px solid #e5e5e5;
      border-radius: 4px;
      position: absolute;
      left: 0;
      top: 0;
    }
</style>
