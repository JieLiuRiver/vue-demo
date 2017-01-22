<template>
    <div id="test-wrapper">
        <button class="btn btn-primary" type="button" @click="TestAction">点击测试</button>
        <div>{{test|json}}</div>
    </div>
</template>
<script>
    import {
        TestAction
    } from '../../vuex/action.js';
    export default {
        vuex: {
            getters: {
                test: state => state.test
            },
            actions: {
                TestAction
            }
        }
    }
</script>