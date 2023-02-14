<!--
 * @Author: gq
 * @Date: 2023-02-14 18:38:54
 * @LastEditors: gq
 * @LastEditTime: 2023-02-14 19:19:20
 * @Description: file content
-->

<template>

    <div class="boxx" v-if="type">
        预警中心
    </div>

</template>
<script>

export default {
    name:'warningCenter',
    title:"预警中心 > 预警中心",
    data() {
        return {
          type:false
        };
    },
    components: {
  
    },
    methods:{
        show(){
            this.type=true;
        },
        hide(){
            this.type=false;
        }
    },
    mounted() {
        
    },
    created() {
        
    }
};
</script>
<style scoped lang="scss">
.boxx{
    position: fixed;
    background-color: red;
    z-index: 999999;
    top: 50%;
    left: 50%;
}

</style>