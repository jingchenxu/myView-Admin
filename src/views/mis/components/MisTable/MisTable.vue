<template>
  <div class="mis-table">
    <el-table :data="data" style="width: 100%" border size="small" :stripe="stripe" v-loading="loading" @row-dblclick="handleDbclick">
      <el-table-column type="index" align="center" width="50">
      </el-table-column>
      <el-table-column type="selection" align="center" width="55">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TableColumn from './TableColumn';

export default Vue.extend({
  name: "MisTable",
  props: {
    stripe: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    column: {
      type: Array,
      default: () => {}
    },
    data: {
      type: Array,
      default: () => {
        return [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleDbclick(row, column, event) {
      console.log("双击被触发了");
      this.$emit("handleDbclick", row, column, event);
    },
  },
  mounted() {
    let tableColumn: TableColumn = {
      prop: 'data',
      label: '日期'
    }
    console.dir(tableColumn);
  }
});
</script>


<style lang="less" scoped>
.mis-table {
  width: auto;
  height: auto;
}
</style>
