<template>
  <div>
    <mis-tab :activeTab="position">
      <div slot="list">
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
              <Button type="primary" icon="md-add" @click="handleAdd('searchParams')">新增</Button>
            </FormItem>
            <FormItem>
              <Button type="primary" icon="ios-create" @click="handleAdd('searchParams')">修改</Button>
            </FormItem>
            <FormItem>
              <Button type="error" icon="ios-trash" @click="handleAdd('searchParams')">删除</Button>
            </FormItem>
            <FormItem>
              <Button type="primary" icon="ios-redo" @click="handleAdd('searchParams')">导出</Button>
            </FormItem>
          </Form>
        </div>
        <mis-table :data="data" :columns="columns" @handleDbclick="handleDbclick" :loading="searching" />
        <white-space />
        <Page @on-change="handlePageChange" :total="total" show-sizer />
      </div>
      <detail slot="detail" />
    </mis-tab>
  </div>
</template>

<script>
import axios from 'axios'
import MisTable from '../components/MisTable'
import MisTab from '../components/MisTab'
import detail from './SysPage1Detail'

export default {
  name: 'SysPage1',
  components: {
    MisTable,
    MisTab,
    detail
  },
  data () {
    return {
      position: 'list',
      searchParams: {},
      searchUrl: '/api/searchuserlist',
      columnUrl: '/api/getcolumns',
      columnid: 'syspage',
      searching: false,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      columns: [],
      data: []
    }
  },
  mounted () {
    this.initList()
  },
  methods: {
    async initList () {
      this.getColumns()
      await this.handleSearch()
    },
    handleDbclick (row, column, event) {
      console.log('双击被触发了')
      this.position = 'detail'
    },
    getColumns () {
      let params = new URLSearchParams()
      params.append('columnid', this.columnid)
      this.$axios.get(`${this.columnUrl}?columnid=${this.columnid}`).then(res => {
        if (res.success) {
          this.columns = res.data
        }
      })
    },
    handleSearch () {
      this.searching = true
      let searchParams = Object.assign(this.searchParams, {})
      searchParams['pagenumber'] = this.currentPage
      searchParams['limit'] = this.pageSize
      let params = new URLSearchParams()
      for (let key in searchParams) {
        if (searchParams[key]) {
          params.append(key, searchParams[key])
        }
      }

      this.$axios
        .get(`${this.searchUrl}`, {
          params
        })
        .then(res => {
          this.searching = false
          if (res.success) {
            this.data = res.data.list
            this.total = res.data.total
          }
        })
    },
    handleAdd () {},
    handleBack () {},
    handlePageChange (currentPage) {
      this.currentPage = currentPage
      this.handleSearch()
    }
  }
}
</script>
