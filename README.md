# vue-skeleton-element
> A skeleton element component for vue


Install
-----

```javascript

npm i vue-skeleton-element --save

```


Usage
-----

```html
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
            <h2>{{title}}</h2>
        </skeleton-title>
        <h1>&lt;SkeletonPage/&gt;</h1>
        <skeleton-page :data="title" :enable-animation="true">
            <h2>{{title}}</h2>
        </skeleton-page>
    </div>
</template>
```

```javascript
import { SkeletonList, SkeletonTitle, SkeletonPage } from '../src/index'


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

```

Result
-----

#### PC
![image](https://user-images.githubusercontent.com/259410/44142846-22d52cba-a0b4-11e8-9b7d-9c916b05c969.png)



#### Mobile
![image](https://user-images.githubusercontent.com/259410/44142906-5ab008ee-a0b4-11e8-96ec-c9585d990a29.png)





