<template>
    <div class="content-right-wrapper pull-right f-w f-h">
        <div class="content-right-innerwrapper f-h">
            <div class="content-detailinfo">
                {{{testHtml}}}
            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'underscore';
    export default {
        data() {
            return{
                testHtml: ''
            }
        },
        components: {
        },
        ready() {
            this.testHtml = _.unescape('&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;h1 style=&quot;border-bottom: 2px solid rgb(204, 204, 204); padding: 0px 4px 0px 0px; margin: 0px 0px 10px;&quot;&gt;&lt;span style=&quot;font-family: consolas;&quot;&gt;&lt;strong&gt;&lt;span style=&quot;font-family: consolas; font-size: 14px;&quot;&gt;1.数组求和');
        }
    }
</script>
<style>
    .content-right-innerwrapper{
        margin-left: 288px;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .content-detailinfo{
        height: 1200px;
        padding:10px 20px;
    }
</style>