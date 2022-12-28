<template>
    <div class="tagsnew" v-if="showTags">
        <div style="margin: 0 0 0 2vh;">{{titme}}/{{name}}</div>
        <!-- <ul>
            <li class="tagsnew-li" v-for="(item, index) in tagsList" :key="index">
                <router-link :to="item.path" class="tags-li-titlenew">
                    {{ item.title }}
                </router-link>
                <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
            </li>
        </ul> -->

    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            tagsList: [],
            titme:'aaaa',
            name:'多少度',
        }
    },
    methods: {
        isActive(path) {
            return path === this.$route.fullPath;
        },

        // 设置标签
        setTags(route) {
            console.log(route,"routeroute")
            console.log(this.tagsList,"this.tagsList")
            const isExist = this.tagsList.some(item => {
                return item.path === route.fullPath;
            })
            if (!isExist) {
                if (this.tagsList.length >= 8) {
                    this.tagsList.shift();
                }
                this.tagsList.push({
                    title: route.meta.title,
                    path: route.fullPath,
                    name: route.matched[1].components.default.name
                })
            }
            bus.$emit('tags', this.tagsList);
        },
        handleTags(command) {
            command === 'other' ? this.closeOther() : this.closeAll();
        }
    },
    computed: {
        showTags() {
            return this.tagsList.length > 0;
        }
    },
    watch: {
        $route(newValue, oldValue) {
            this.setTags(newValue);
        }
    },
    created() {
        this.setTags(this.$route);
        // 监听关闭当前页面的标签页
        bus.$on('close_current_tags', () => {
            for (let i = 0, len = this.tagsList.length; i < len; i++) {
                const item = this.tagsList[i];
                if (item.path === this.$route.fullPath) {
                    if (i < len - 1) {
                        this.$router.push(this.tagsList[i + 1].path);
                    } else if (i > 0) {
                        this.$router.push(this.tagsList[i - 1].path);
                    } else {
                        this.$router.push('/');
                    }
                    this.tagsList.splice(i, 1);
                    break;
                }
            }
        })
    }
}

</script>


<style>
.tagsnew {
    /* position: relative; */
    height: 30px;
    /* overflow: hidden;
        background: #fff;
        padding-right: 120px;
        box-shadow: 0 5px 10px #ddd; */
}

.tags ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}

.tagsnew-li {
    /* float: left; */
    margin: 3px 5px 2px 3px;
    border-radius: 3px;
    font-size: 12px;
    /* overflow: hidden; */
    cursor: pointer;
    height: 68px;
    font-size: 2vh;
    line-height: 68px;
    padding: 0 5px 0 12px;
    vertical-align: middle;
    color: #fff;
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    transition: all .3s ease-in;
}

li.tagsnew-li::marker {
    display: none;
}

.tags-li:not(.active):hover {
    background: #f8f8f8;
}

.tags-li.active {
    color: #fff;
}

.tags-li-titlenew {
    float: left;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 5px;
    color: #fff;
}

.tags-li.active .tags-li-titlenew {
    color: #fff;
}

.tags-close-box {
    position: absolute;
    right: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 1px;
    text-align: center;
    width: 110px;
    height: 30px;
    background: #fff;
    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);
    z-index: 10;
}
</style>
