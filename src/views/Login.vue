<template>
  <div class="login-container">
    <Form class="login-form" ref="login" :model="form" :rules="rule">
      <div class="logo-container">
        <img src="../../public/misimg/myView_Admin.png"/>
      </div>
      <FormItem prop="user">
        <Input size="large" type="text" v-model="form.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input size="large" type="password" v-model="form.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="rememberPassword">
        <Checkbox v-model="form.rememberPassword">记住密码</Checkbox>
      </FormItem>
      <FormItem>
        <Button size="large" :loading="loading" long type="primary" @click="handleLogin('login')">登录</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        rememberPassword: false
      },
      rule: {},
      loading: false
    }
  },
  methods: {
    handleLogin () {
      console.dir(process.env)
      this.loading = true
      this.$axios.post('/api/login', this.form).then(res => {
        this.loading = false
        console.dir(res)
        if (res.success) {
          this.$Message.success(res.msg)
          this.$store.dispatch('UPDATECURRENTUSER', res.data)
          this.linkToMis()
        }
      })
    },
    linkToMis () {
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
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
