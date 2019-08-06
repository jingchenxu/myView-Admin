<template>
  <div>
    <Table highlight-row ref="currentRowTable" :border="false" :columns="columns" :data="data"></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "商品编号",
          key: "goodid"
        },
        {
          title: "商品名称",
          key: "goodname"
        },
        {
          title: "商品条码",
          key: "goodcode"
        },
        {
          title: "单价",
          key: "goodprice",
          render: (h, params) => {
            let _goodprice = Number(params.row.goodprice).toFixed(2)
            return h('span', _goodprice)
          }
        },
        {
          title: '数量（件）',
          key: 'goodnumber'
        },
        {
          title: '全额',
          key: 'goodtotal',
          render: (h, params) => {
            let _goodtotal = Number(params.row.goodtotal).toFixed(2)
            return h('span', _goodtotal)
          }
        }
      ],
      data: [
        {
          goodid: "1234561",
          goodname: '矿泉水550ml',
          goodcode: '12341234213',
          goodprice: 2.00,
          goodnumber: 1,
          goodtotal: 2.00
        },
        {
          goodid: "1234562",
          goodname: '矿泉水550ml',
          goodcode: '12341234213',
          goodprice: 2.00,
          goodnumber: 1,
          goodtotal: 2.00
        },
        {
          goodid: "1234563",
          goodname: '矿泉水550ml',
          goodcode: '12341234213',
          goodprice: 2.00,
          goodnumber: 1,
          goodtotal: 2.00
        },
        {
          goodid: "1234564",
          goodname: '矿泉水550ml',
          goodcode: '12341234213',
          goodprice: 2.00,
          goodnumber: 1,
          goodtotal: 2.00
        },
      ]
    };
  }
};
</script>