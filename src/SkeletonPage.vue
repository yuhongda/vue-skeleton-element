<style lang="scss" scoped>
    @import './css/common.scss';

    .skeleton-page{
        .skeleton-page-header{
            border-bottom:2px solid #f1f1f1;
            .skeleton-page-header-image{
                background: #f1f1f1; width:112px; height: 112px;overflow: hidden;position: relative;border-radius:3px;float:left;margin-right:20px;
            }
            .skeleton-page-header-image.enable-animation{
                &:before {
                    @include lightAnimation();
                    width: 100px;
                }
            }
            
        }
        
    }
    [data-dpr] .skeleton-page{
        .skeleton-page-header{
            border-bottom:2px solid #f1f1f1;
            .skeleton-page-header-image{
                width:rem(112); height: rem(112);

                &:before {
                    width: rem(100);
                }
            }
        }
    }

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
                width: 200px;
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
            <div class="skeleton-page">
                <div class="skeleton-page-header clearfix">
                    <div class="skeleton-page-header-image" :class="{'enable-animation': enableAnimation}"></div>
                    <ul class="skeleton-list">
                        <li v-for="n in 3" :key="n" :class="{'enable-animation': enableAnimation}"></li>
                    </ul>
                </div>
                <ul class="skeleton-list">
                    <li v-for="n in 5" :key="n" :class="{'enable-animation': enableAnimation}"></li>
                </ul>
            </div>
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
