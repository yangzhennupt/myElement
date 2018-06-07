<template>
  <div style="margin: 20px;">
    <div class="block">
    <span class="demonstration">显示总数</span>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="10"
      :isBusiness = "true"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
  <el-button @click="total = 20"> </el-button>
  </div>
</template>
<script>
    export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        total:1000,
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    }
  }
</script>
