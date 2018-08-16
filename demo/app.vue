<style lang="scss">
    
    @media only screen and (-webkit-min-device-pixel-ratio: 2){html{-webkit-text-size-adjust:none}}
    body,div,p,h1,h2,h3,h4,h5,h6,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,table,th,td{margin:0;padding:0;}address,cite,em,i{font-style:normal;}li{list-style:none;}a{text-decoration:none;}a:hover{text-decoration:underline;}legend{color:#000;}fieldset,img{border:0;}table{border-collapse:collapse;border-spacing:0;}
    body {
        color:#333; background:#fff;
        -webkit-appearance: none;
        font-family:"Microsoft YaHei","微软雅黑",tahoma,Helvetica,arial,sans-serif,simsun,"宋体";
        font-size:1rem;
    }
    [data-dpr]{
        h1,h2,h3,h4,h5,h6{font-size: 1rem}
    }

    .layout-box { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; }

    .fade-transition {
        transition:  all 1s ease;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
        transform: translateX(320px);
    }


 </style>

 <template>
     
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>

 </template>

 <script>
     export default {
        data() {
             return {
                
             }
        },
        methods:{
            
        }
     };
 </script>
