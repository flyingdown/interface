<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <navigation></navigation>
            </el-col>
            <el-col :span="14">
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Navigation from '@/components/navigation'
export default {
    data () {
        return {

        }
    },
    components: {
        Navigation,
    }
}
</script>

<style>

</style>
