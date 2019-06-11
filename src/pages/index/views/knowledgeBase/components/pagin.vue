<!-- 分页组件 -->
<template>
    <div>
        <el-pagination
            @size-change="handleSizeChang"
            @current-change="handleCurrentChange"
            :current-page="pagination.pageIndex"
            :page-sizes="pageSize"
            :page-size="pagination.pageRows"
            :layout="layout"
            :total="pageTotal">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name: 'pagin',
    props: {
        paginationProps: {
            type: Object,
            default() {
                return {
                    pageIndex: 1, // 当前页数
                    pageRows: 10, // 每页显示条目个数
                };
            }
        },
        // 总条目数
        pageTotal: {
            type: Number,
            default: 0
        },
        // 每页显示个数选择器的选项设置
        pageSizes: {
            type: Array,
            default() {
                return [10, 20, 50, 100, 200];
            }
        },
        // 组件布局，子组件名用逗号分隔
        layout: {
            type: String,
            default: 'total, sizes, prev, pager, next'
        }
    },
    data() {
        return {
            pagination: {
                pageIndex: 1,
                pageRows: 10,
            }
        }
    },
    watch: {
        paginationProps: {
            handler(newVale) {
                this.pagination = newVale;
            },
            deep: true,
            immediate: true
        }
    },
    mounted() {},
    methods: {
        // Events 
        // pageSize 当前页显示条目个数改变时会触发
        handleSizeChang(val) {
            this.pagination = {
                pageIndex: 1,
                pageRows: val
            };
            this.$emit('getPagination', this.pagination);
        },
        // currentPage 当前页改变传值
        handleCurrentChange(val) {
            this.pagination.pageIndex = val;
            this.$emit('getPagination', this.pagination);
        },
    }
}
</script>
