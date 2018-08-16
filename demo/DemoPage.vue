<style lang="scss">
    .page-wrap{
        padding:20px;

        h1{
            font-size: 150%;
        }
    }

    [data-dpr] .page-wrap{
        h1{
            font-size: .5rem;
        }
    }
 </style>

<template>
    <div class="page-wrap">
        <h1>&lt;SkeletonList/&gt;</h1>
        <skeleton-list :data="list" :repeat="5" :enable-animation="true">
            <ul>
                <li v-for="item in list" :key="item.id">{{item.name}}</li>
            </ul>
        </skeleton-list>
        <h1>&lt;SkeletonTitle/&gt;</h1>
        <skeleton-title :data="title" :enable-animation="true">
            <div>{{title}}</div>
        </skeleton-title>
        <h1>&lt;SkeletonPage/&gt;</h1>
        <skeleton-page :data="title" :enable-animation="true">
            <div>{{title}}</div>
        </skeleton-page>
    </div>
 </template>

 <script>
    import { SkeletonList, SkeletonTitle, SkeletonPage } from '../dist/vue-skeleton-element.js'
    


    export default {
        data() {
            return {
                list: null,
                title: null
            }
        },
        mounted(){
            setTimeout(() => {
                this.list = [
                    { id:1, name: 'Appetite for Destruction' },
                    { id:2, name: 'Use Your Illusion I' },
                    { id:3, name: 'Use Your Illusion II' },
                ];
                this.title = 'Appetite for Destruction'
            }, 3000);
        },
        methods:{
            
        },
        components:{
            SkeletonList,
            SkeletonTitle,
            SkeletonPage
        }
    };
 </script>
