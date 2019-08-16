<template>
  <div class="article-publish">
    <Card>
      <Form ref="form" :model="form" :rules="rules" :label-width="100">
        <Row>
          <Col span="24">
          <FormItem label="文章标题" prop="title">
            <Input v-model="form.title" placeholder="请输入文章标题"></Input>
          </FormItem>
          </Col>
          <Col span="24">
          <FormItem label="文章副标题" prop="subtitle">
            <Input v-model="form.subtitle" placeholder="请输入文章副标题"></Input>
          </FormItem>
          </Col>
          <Col span="8" style="padding-right:10px">
          <FormItem label="文章分类" prop="articletype">
          <Select v-model="form.articletype" filterable>
            <Option v-for="item in firstLevelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          </FormItem>
          </Col>
          <Col span="16">
          <FormItem label="文章标签" prop="level2">
          <Select v-model="form.tags" filterable multiple>
            <Option v-for="item in secondLevelList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
          </FormItem>
          </Col>
          <Col span="24">
          <my-markdown v-model="form.context" />
          </Col>
          <Col span="24">
          <FormItem>
            <Button :loading="loading" @click="handleSubmit" type="primary">保存</Button>
            <Button style="margin-left: 8px">预览</Button>
          </FormItem>
          </Col>
        </Row>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'ArticlePublish',
  data () {
    return {
      loading: false,
      form: {
        context: '# hello',
        tags: []
      },
      rules: {
        title: [
          { required: true, message: '文章标题不能为空！', trigger: 'blur' }
        ],
        subtitle: [
          { required: true, message: '文章副标题不能为空', trigger: 'blur' }
        ],
        articletype: [
          { required: true, message: '请选择文章分类', trigger: 'change' }
        ]
      },
      firstLevelList: [
        {
          label: '试题',
          value: '01'
        },
        {
          label: '文章',
          value: '02'
        }
      ],
      secondLevelList: [
        {
          label: 'java',
          value: '01'
        },
        {
          label: 'javascript',
          value: '02'
        }
      ]
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true
          this.$axios.post('/api/savearticle', this.form).then(res => {
            this.loading = false
            if (res.success) {
              this.$Message.success(res.msg)
            }
          })
        } else {
          this.$Message.error('表单校验失败')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../theme.less";
.article-publish {
  min-height: 75vh;
  padding: 0 @default-gutter;
  margin-top: 44px;
  line-height: 40px;
}
</style>
