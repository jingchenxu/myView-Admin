<template>
  <mis-simple-list>
    <div class="search-items-container">
      <Form ref="searchParams" :model="searchParams" inline>
        <FormItem prop="name">
          <Input clearable type="text" v-model="searchParams.name" @on-enter="handleSearch" placeholder="请输入姓名">
          </Input>
        </FormItem>
        <FormItem prop="address">
          <Input clearable v-model="searchParams.address" @on-enter="handleSearch" placeholder="请输入地址">
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
    <mis-table :data="data" :loading="searching" />
    <white-space />
    <Page @on-change="handlePageChange" :total="total" show-sizer />
  </mis-simple-list>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MisTable from '../components/MisTable'
import MisSimpleList from '../components/MisSimpleList'
import { searchUserList } from '@/api/sysapi'

@Component({
  name: 'SysPage3',
  components: {
    MisTable,
    MisSimpleList
  }
})
export default class SysPage3 extends Vue {
  private data () {
    return {
      searchParams: {},
      searchUrl: '/api/searchuserlist',
      searching: false,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      data: []
    }
  }
  private mounted () {
    this.initList()
  }

  private async initList () {
    await this.handleSearch()
  }
  private handleSearch () {
    let vm = this as any
    (this as any).searching = true
    let searchParams: any = Object.assign((this as any).searchParams, {})
    searchParams['pagenumber'] = (this as any).currentPage
    searchParams['limit'] = (this as any).pageSize
    let params = new URLSearchParams()
    for (let key in searchParams) {
      if (searchParams[key]) {
        params.append(key, searchParams[key])
      }
    }
    searchUserList(params).then((res: any) => {
      (this as any).searching = false
      let result = res.data
      if (result.success) {
        vm.data = result.data.list
        vm.total = result.data.total
      }
    })
  }
  private handleAdd () {}
  private handleBack () {}
  private handlePageChange (currentPage: number) {
    (this as any).currentPage = currentPage
    this.handleSearch()
  }
}
</script>
