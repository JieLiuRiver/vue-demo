<template>
<div class="home-wrapper">
    <div class="home-container">
      <header>
        <div class="f-tc site-header">
          <div class="home-header clearfix">
            <div class="home-logo f-fl">
              <img src="http://heliujie.com/public/works/qimin/public/images/home-logo.png" width="100%" height="100%" alt="">
            </div>
            <div class="home-nav f-fr f-ib">
              <v-nav></v-nav>
            </div>
          </div>
        </div>
      </header>
      <div style="padding-bottom: 60px">
             <div class="login-wrapper f-pr">
                <div class="login-container">
                    <div class="login-title f-tc">会员登录</div>
                    <i-input :value.sync="phonenumber" placeholder="手机号" size="large" class="input phonenumber"></i-input>
                    <i-input :value.sync="password" placeholder="密码" size="large" class="input password"></i-input>
                    <i-button class="f-w login-btn">登陆</i-button>
                    <p class="clearfix f-h">
                        <span class="f-ib f-fl login-link">快捷登录</span>
                        <span class="f-ib f-fr login-link">无账号？请先注册</span>
                    </p>
                </div>
            </div>
      </div>
    </div>
</div>


</template>
<script>
  import vNav from 'components/Nav/Nav';
  import vFooter from 'components/Footer/Footer';
import $ from 'jquery';
export default{
    data() {
        return {
            screenHeight: 0
        }
    },
    ready() {

    },
    components: {
        vNav,
        vFooter
    }
}
</script>
<style>
  .home-wrapper {}

  .site-header {
    padding: 15px 0;
  }

  .home-header {
    max-width: 1200px;
    padding: 0 30px;
    margin: 0 auto;
    height: 70px;
  }

  .home-logo {
    height: 45px;
    width: 98px;
  }

  .nav-fixed {
    position: fixed;
    left: 0;
    top: 0;
    background-color: #000;
  }

  .nav-fixed-container {
    padding: 0 30px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav-item {
    font-weight: 500;
    display: block;
    text-decoration: none;
    padding: 15px;
    white-space: nowrap;
    color: #424243;
  }

  .nav-item .active {
    color: #ccc;
  }

  .nav-link-fixed {
    color: #fff;
    font-weight: bold;
  }

  .nav-logo-text {
    padding: 16px 10px;
    color: #fff;
    font-size: 16px;
  }

  .uptodown-transition {
    transition: .4s all;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
  }

  .uptodown-enter,
  .uptodown-leave {
    transform: translate3d(0, -100%, 0);
    -webkit-transform: translate3d(0, -100%, 0);
    -moz-transform: translate3d(0, -100%, 0);
  }

    .login-wrapper{
        /*background-color: #fff;*/
    }
    .login-container{
        width: 400px;
        height: 412px;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        background: #fff;
        padding: 50px;
        box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 5px;
    }
    .login-title{
        margin-bottom: 50px;
        padding: 5px 0;
        font-size: 20px;
    }
    .input{
        margin-bottom: 20px;
    }
    .input .ivu-input{
        height: 42px;
        background: rgba(239, 240, 244, 0.498039);
        color: #000;
        border-radius: 2px;
        border: 0;
    }
    .input .ivu-input:focus{
        outline: 0 !important;
    }
    .login-btn{
        height: 42px;
        font-size: 16px;
        border-radius: 2px;
        border: 0;
        background-color: #555;
        color: #fff;
        margin-bottom: 20px;
    }
    .login-btn:hover{
        background-color: #000;
        color: #fff;
    }
    .login-link{
        cursor:pointer;
    }
</style>
