<template>
  <div class="contact-wrapper f-w">
    <div class="contact-container">
      <div class="contact-title-wrapper f-w">
        <h3 class="contact-title">联系我们</h3>
      </div>
      <div class="contact-content-wrapper clearfix">
        <div class="f-fl contact-form f-h">
          <form>
            <div class="contact-form-group f-w">
              <span class="f-ib f-w" style="padding: 5px 0">你的名字</span>
              <div class="f-ib contact-form-input-wrapper">
                <input type="text" class="contact-form-input f-ib f-w" placeholder="姓氏" name="你的名字">
              </div>
              <div class="f-ib contact-form-input-wrapper" style="margin-left:16px;">
                <input type="text" class="contact-form-input f-ib f-w" placeholder="名字" name="你的名字">
              </div>
            </div>
            <div class="contact-form-group f-w">
              <span class="f-ib f-w" style="padding: 5px 0">你的邮箱</span>
              <div class="f-ib contact-form-input-wrapper" style="width: 100%;">
                <input type="text" class="contact-form-input f-ib f-w" placeholder="请输入邮箱" name="你的邮箱">
              </div>
            </div>
            <div class="contact-form-group f-w" style="height: auto">
              <span class="f-ib f-w" style="padding: 5px 0">你的留言</span>
              <div class="f-ib contact-form-input-wrapper" style="width: 100%;">
                <textarea rows="" class="contact-remark f-w" cols=""></textarea>
              </div>
            </div>
            <button type="button" class="f-ib contact-submit f-tc">提交</button>
          </form>
        </div>
        <div class="f-fl contact-info f-h">
          <p class="contact-info-p">
            我司为不同企业提供不同规格类型的建站服务，价格低廉，质量优秀
          </p>
          <div class="contact-info-detail">
            <h3 class="contact-info-title">联系方式</h3>
            <p style="margin-bottom: 15px;">上海市静安区泰兴路89号，裸心社4楼</p>
            <p style="margin-bottom: 15px;">021 60545631</p>
            <p style="margin-bottom: 15px;">contact@heidianer.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: ''
      }
    }
  }

</script>
<style>
  .contact-wrapper {
    padding-bottom: 60px;
  }
  
  .contact-container {
    max-width: 1200px;
    padding: 0 30px;
    height: 537px;
    margin: 0 auto;
  }
  
  .contact-title {
    margin: 32px 0;
    font-weight: 700;
    font-size: 16px;
  }
  
  .contact-container-wrapper {}
  
  .contact-form {
    width: 60%;
    min-height: 100px;
  }
  
  .contact-info {
    width: 40%;
    min-height: 100px;
  }
  
  .contact-form-group {
    height: 76px;
    margin-bottom: 30px;
  }
  
  .contact-form-input-wrapper {
    width: calc( 50% - 10px);
    margin-bottom: 10px;
  }
  
  .contact-form-input {
    padding: 10px 15px;
    border: 1px solid #d3d3d3;
    background: #e2e2e2;
  }
  
  .contact-form-input:focus,
  .contact-remark:focus {
    background-color: #fff;
    color: #333;
  }
  
  .contact-remark {
    height: 100px;
    border: 1px solid #d3d3d3;
    background-color: #e2e2e2;
    padding: 10px 15px;
  }
  
  .contact-submit {
    width: 100%;
    height: 40px;
    background-color: #424243;
    line-height: 40px;
    border: 0;
    color: #fff;
  }
  
  .contact-info {
    padding-left: 30px;
  }
  
  .contact-info-p {
    margin-bottom: 30px;
    font-size: 14px;
    line-height: 28px;
  }
  
  .contact-info-title {
    font-size: 22px;
    line-height: 30px;
    min-height: 30px;
  }

</style>
