<template>
  <div class="login-container">
    <Form class="login-form" ref="formInline" :model="formInline" :rules="ruleInline">
      <div class="logo-container">

      </div>
      <FormItem prop="user">
        <Input size="large" type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input size="large" type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="rememberPassword">
        <Checkbox v-model="formInline.rememberPassword">记住密码</Checkbox>
      </FormItem>
      <FormItem>
        <Button size="large" long type="primary" @click="handleSubmit('formInline')">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formInline: {},
      ruleInline: {}
    }
  },
  methods: {
    handleSubmit () {
      this.$router.push({
        name: 'index'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  .login-form {
    width: 400px;
    height: 370px;
    border: 1px solid #dadada;
    padding: 30px 20px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .logo-container {
      height: 80px;
      background-color: grey;
      margin-bottom: 20px;
    }
  }
}
</style>
