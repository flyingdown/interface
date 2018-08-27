<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <nav-side></nav-side>
            </el-col>
            <el-col :span="14">
            </el-col>
        </el-row>
    </div>
</template>

<script>
import navSide from '@/components/navSide'
export default {
    data () {
        return {

        }
    },
    components: {
        navSide,
    }
}
</script>

<style>

</style>
