<template>
    <div id="app">
        <div class="blog-wrapper container f-pr f-h">
            <Jack-header></Jack-header>
            <div class="content-wrapper clearfix f-w f-h">
                <Jack-slidebar></Jack-slidebar>
                <Jack-content></Jack-content>
            </div>
        </div>
    </div>
</template>
<script>
    import JackHeader from './JackHeader/JackHeader.vue';
    import JackSlidebar from './JackSlidebar/JackSlidebar.vue';
    import JackContent from './JackContent/JackContent.vue';
    export default {
        data() {
            return{
                
            }
        },
        components: {
            JackHeader,
            JackSlidebar,
            JackContent
        }
    }
</script>
<style>
@import '../public/css/main.less';

.blog-wrapper{
   height: 800px;
   margin: 0 auto;
   background: #fff;
   padding-top: 48px;
   overflow: hidden;
   padding-right: 0;
   padding-left: 0;
   box-shadow: 1px 0 #d9d9d9, -1px 0 #d9d9d9;
}
</style>
