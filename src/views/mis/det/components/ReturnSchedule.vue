<template>
  <div>
    <Table highlight-row ref="currentRowTable" :columns="columns" :data="data"></Table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          title: '时间',
          key: 'date'
        },
        {
          title: '当前进度',
          key: 'currentstatus'
        },
        {
          title: '状态',
          key: 'status'
        },
        {
          title: '操作员ID',
          key: 'userid'
        },
        {
          title: '耗时',
          key: 'time'
        }
      ],
      data: [
        {
          date: '2019-08-07 14:10',
          currentstatus: '联系客户',
          status: '进行中',
          userid: '取货员ID1234',
          time: '5mins'
        },
        {
          date: '2019-08-07 14:10',
          currentstatus: '取货员出发',
          status: '成功',
          userid: '取货员ID1234',
          time: '5mins'
        },
        {
          date: '2019-08-07 14:10',
          currentstatus: '取货员接单',
          status: '成功',
          userid: '取货员ID1234',
          time: '5mins'
        },
        {
          date: '2019-08-07 14:10',
          currentstatus: '申请审批通过',
          status: '成功',
          userid: '系统',
          time: '5mins'
        },
        {
          date: '2019-08-07 14:10',
          currentstatus: '发起退货申请',
          status: '成功',
          userid: '用户',
          time: '5mins'
        }
      ]
    }
  }
}
</script>
