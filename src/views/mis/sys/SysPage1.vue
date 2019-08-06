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
              <Button :disabled="selection.length !== 1" type="primary" icon="ios-create" @click="handleEdit('searchParams')">修改</Button>
            </FormItem>
            <FormItem>
              <Button :disabled="selection.length < 1" type="error" icon="ios-trash" @click="handleDelete('searchParams')">删除</Button>
            </FormItem>
            <FormItem>
              <Button type="primary" icon="ios-redo" @click="handleAdd('searchParams')">导出</Button>
            </FormItem>
          </Form>
        </div>
        <mis-table :data="data" :columns="columns" @handleDbclick="handleDbclick" @handleSelect="handleSelect" :loading="searching" />
        <white-space />
        <Page show-total @on-change="handlePageChange" :total="total" show-sizer />
      </div>
      <detail :ref="detailRef" slot="detail" />
    </mis-tab>
  </div>
</template>

<script>
import axios from 'axios'
import MisTable from '../components/MisTable'
import MisTab from '../components/MisTab'
import detail from './SysPage1Detail'

const name = 'syspage1'

export default {
  name,
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
      deleteUrl: '/api/deletesysuser',
      columnUrl: '/api/getcolumns',
      columnid: 'syspage',
      searching: false,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      columns: [],
      data: [],
      detailRef: `${name}-detailRef`,
      selection: []
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
      this.position = 'detail'
      this.$refs[this.detailRef].handleDbclick(row)
    },
    handleSelect (selection, row) {
      this.selection = selection
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
    handleAdd () {
      this.position = 'detail'
      this.$refs[this.detailRef].handleAdd()
    },
    handleEdit () {
      this.position = 'detail'
      this.$refs[this.detailRef].handleEdit(this.selection[0])
    },
    handleDelete () {
      this.$axios.delete(`${this.deleteUrl}`, {
        data: this.selection
      }).then(res => {
        if (res.success) {
          this.$Message.success(res.msg)
          this.handleSearch()
        }
      })
    },
    handleBack () {},
    handlePageChange (currentPage) {
      this.currentPage = currentPage
      this.handleSearch()
    }
  }
}
</script>
