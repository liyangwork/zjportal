<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>
        <el-container>
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <!--<el-menu :default-openeds="['1', '3']">-->
                <!--默认哪些项自动展开-->
                <el-menu>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>菜单</template>
                        <!--<el-menu-item-group>-->
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="1-1" @click='goToHome("/index/home")'>首页</el-menu-item>
                        <el-menu-item index="1-2" @click='goToHome("/index/home1")'>人员信息</el-menu-item>
                        <!--</el-menu-item-group>-->
                        <!--<el-menu-item-group>-->
                        <el-menu-item index="1-3" @click='goToHome("/index/home2")'>社会安全</el-menu-item>
                        <!--</el-menu-item-group>-->
                        <el-submenu index="1-4">
                            <template slot="title">路线集成</template>
                            <el-menu-item index="1-4-1" @click='goToHome("/index/home3")'>百度地图</el-menu-item>
                            <el-menu-item index="1-4-2">高德地图</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <!--<el-menu-item-group>-->
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <!--</el-menu-item-group>-->
                        <!--<el-menu-item-group title="分组2">-->
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <!--</el-menu-item-group>-->
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                        <!--<el-menu-item-group>-->
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        <!--</el-menu-item-group>-->
                        <!--<el-menu-item-group title="分组2">-->
                        <el-menu-item index="3-3">选项3</el-menu-item>
                        <!--</el-menu-item-group>-->
                        <el-submenu index="3-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <!--<el-footer>Footer</el-footer>-->
            </el-container>
        </el-container>
    </el-container>
</template>
    <style>
        .el-header {
            background-color: #B3C0D1;
            color: #333;
            line-height: 60px;
        }

        .el-aside {
            color: #333;
        }
    </style>

    <script>
        export default {
            data() {

            },
            methods: {
                goToHome(url) {
                    this.$router.push({path: url});
                }
            }

        };
    </script>