<template>
  <div>
    <mis-tab :activeTab="position">
      <div slot="list">
        <div class="search-items-container">
          <Form ref="searchParams" :model="searchParams" inline>
            <FormItem prop="user">
              <Input type="text" v-model="searchParams.user" placeholder="Username">
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input v-model="searchParams.password" placeholder="Password">
              </Input>
            </FormItem>
            <FormItem>
              <Button type="primary" :loading="searching" icon="ios-search" @click="handleSearch('searchParams')">查询</Button>
            </FormItem>
          </Form>
        </div>
        <mis-table @handleDbclick="handleDbclick" />
        <white-space/>
        <Page :total="100" show-sizer />
      </div>
      <detail slot="detail" />
    </mis-tab>
  </div>
</template>

<script>
import axios from "axios";
import MisTable from "../components/MisTable";
import MisTab from "../components/MisTab";
import detail from "./SysPage1Detail";

export default {
  name: "SysPage1",
  components: {
    MisTable,
    MisTab,
    detail
  },
  data() {
    return {
      position: "list",
      searchParams: {},
      searching: false
    };
  },
  mounted() {
    console.log("请求开始");
    axios.get("/api/data").then(res => {
      console.dir(res);
    });
  },
  methods: {
    handleDbclick(row, column, event) {
      console.log("双击被触发了");
      this.position = "detail";
    },
    handleBack() {
      
    },
    handleSearch (ref) {
      this.searching = true
      setTimeout(() => {
        this.searching = false
      }, 3000)
    }
  }
};
</script>
