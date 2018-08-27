<template>
    <div>
        <el-container>
            <el-header>
                <div class="title">
                    <h4><router-link to="/index">接口发布系统</router-link></h4>
                </div>
            </el-header>
            <el-container>
                <el-aside style="width: 200px;">
                    <el-menu style="height: 700px; border-right: 0px;" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>接口管理</span>
                            </template>
                            <el-menu-item index="1-1"></el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
        
        
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    components: {
    }
}
</script>

<style>
.title {
    height: 60px;
    background: #1f2d3d;
    color: #fff;
    line-height: 60px;
    text-align: center;
    width: 200px;
}

.title a {
    color: #fff;
    text-decoration: none;
}

.el-header {
    padding: 0px;
}

.nav, .el-aside {
    height: 700px;
}
   
</style>
