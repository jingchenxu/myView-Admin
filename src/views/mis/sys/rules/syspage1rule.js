export default function sysuserRule () {
  let rule = {
    address: [
      { required: true, message: '用户地址不能为空', trigger: 'blur' }
    ],
    name: [
      { required: true, message: '用户姓名不能为空', trigger: 'blur' }
    ],
    date: [
      { required: true, message: '创建日期不能为空', trigger: 'change', type: 'date' }
    ]
  }
  return rule
}
