<style lang="scss" scoped>
    @import './css/common.scss';

    .skeleton-title{
        background: #f1f1f1; height: 100px;overflow: hidden;position: relative;border-radius:3px;margin:20px 0;
        
    }
    .skeleton-title.enable-animation{
        &:before {
            @include lightAnimation();
            width: 400px;
        }
    }

    [data-dpr] .skeleton-title{
        height: rem(100);margin:rem(20) 0;
        &:before {
            width: rem(400);
        }
    }
</style>

<template>
    <div>
        <template v-if="data == null">
            <div class="skeleton-title" :class="{'enable-animation': enableAnimation}"></div>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </div>
 </template>

 <script>
    export default {
        props:{
            data:{
                type: [Object, Array, String],
                default: null
            },
            enableAnimation: {
                type: Boolean,
                default: true
            }
        },
        data() {
             return {
                
             }
        },
        mounted(){

        },
        methods:{
            
        }
    };
 </script>
