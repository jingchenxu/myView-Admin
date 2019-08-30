<template>
  <mis-simple-list>
    <div class="search-items-container">
      <Form ref="searchParams" :model="searchParams" inline>
        <FormItem prop="tagname">
          <Input clearable type="text" v-model="searchParams.tagname" @on-enter="handleSearch" placeholder="请输入标签名称">
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" :loading="searching" icon="ios-search" @click="handleSearch('searchParams')">查询</Button>
        </FormItem>
        <FormItem>
          <Button type="primary" icon="ios-redo" @click="handleAdd('searchParams')">导出</Button>
        </FormItem>
      </Form>
    </div>
    <mis-table :tabledata="data" :tableColumn="column" :loading="searching" />
    <white-space />
    <Page @on-change="handlePageChange" :total="total" show-sizer />
  </mis-simple-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MisTable from "../components/MisTable";
import MisSimpleList from "../components/MisSimpleList";

@Component({
  name: "art_tag",
  components: {
    MisTable,
    MisSimpleList
  }
})
export default class SysPage3 extends Vue {
  private data() {
    return {
      searchParams: {},
      searchUrl: "/codekeep/art/search_tag",
      searching: false,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      data: [],
      column: [
        {
          type: "index",
          align: "center",
          width: 50
        },
        {
          type: "selection",
          align: "center",
          width: 50
        },
        {
          prop: "tagid",
          label: "标签编号",
          width: 180
        },
        {
          prop: "tagname",
          label: "标签名称",
          width: 180
        },
        {
          prop: "icon",
          label: "标签图标",
          width: 180
        },
        {
          prop: "desc",
          label: "标签描述"
        }
      ]
    };
  }
  private mounted() {
    this.initList();
  }

  private async initList() {
    await this.handleSearch();
  }

  private handleSearch() {
    let vm = this as any;
    (this as any).searching = true;
    let searchParams: any = Object.assign((this as any).searchParams, {});
    searchParams["pagenumber"] = (this as any).currentPage;
    searchParams["pagesize"] = (this as any).pageSize;
    let params = new URLSearchParams();
    for (let key in searchParams) {
      if (searchParams[key]) {
        params.append(key, searchParams[key]);
      }
    }
    (this as any).$axios.get(`${(this as any).searchUrl}`, { params })
      .then((res: any) => {
        (this as any).searching = false
        this.data = res.list
        (this as any).total = res.total
      })
  }

  private handleAdd() {}

  private handleBack() {}

  private handlePageChange(currentPage: number) {
    (this as any).currentPage = currentPage;
    this.handleSearch();
  }
}
</script>