<style lang="scss" scoped>
    @import './css/common.scss';

    .skeleton-list{
        li{
            height: 24px;background: #f1f1f1;margin:20px 0;overflow: hidden;position: relative;border-radius:3px;
            &:last-child{
                width:50%;
            }
        }
        li.enable-animation{
            &:before {
                @include lightAnimation();
            }
        }
    }
    [data-dpr] .skeleton-list{
        li{
            height: rem(24);margin:rem(20) 0;
            &:before {
                width: rem(200);
            }
        }
    }
</style>

<template>
    <div>
        <template v-if="data == null">
            <ul class="skeleton-list">
                <li v-for="n in repeat" :key="n" :class="{'enable-animation': enableAnimation}"></li>
            </ul>
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
            repeat:{
                type: Number,
                default: 5
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
