<template>
  <div class="step-form">
    <mis-page-title title="分步表单" description="将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"/>
    <div class="step-form-content">
      <Card>
        <Row>
          <Col span="8" offset="8">
            <Steps :current="current">
              <Step title="已完成" content="这里是该步骤的描述信息"></Step>
              <Step title="进行中" content="这里是该步骤的描述信息"></Step>
              <Step title="待进行" content="这里是该步骤的描述信息"></Step>
            </Steps>
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
              <FormItem label="Name" prop="name">
                <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
              </FormItem>
              <FormItem label="E-mail" prop="mail">
                <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
              </FormItem>
              <FormItem label="City" prop="city">
                <Select v-model="formValidate.city" placeholder="Select your city">
                  <Option value="beijing">New York</Option>
                  <Option value="shanghai">London</Option>
                  <Option value="shenzhen">Sydney</Option>
                </Select>
              </FormItem>
              <FormItem label="Date">
                <Row>
                  <Col span="11">
                  <FormItem prop="date">
                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                  </FormItem>
                  </Col>
                  <Col span="2" style="text-align: center">-</Col>
                  <Col span="11">
                  <FormItem prop="time">
                    <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                  </FormItem>
                  </Col>
                </Row>
              </FormItem>
              <FormItem label="Gender" prop="gender">
                <RadioGroup v-model="formValidate.gender">
                  <Radio label="male">Male</Radio>
                  <Radio label="female">Female</Radio>
                </RadioGroup>
              </FormItem>
              <FormItem label="Hobby" prop="interest">
                <CheckboxGroup v-model="formValidate.interest">
                  <Checkbox label="Eat"></Checkbox>
                  <Checkbox label="Sleep"></Checkbox>
                  <Checkbox label="Run"></Checkbox>
                  <Checkbox label="Movie"></Checkbox>
                </CheckboxGroup>
              </FormItem>
              <FormItem label="Desc" prop="desc">
                <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
              </FormItem>
              <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
        <Divider/>
        <Alert>
          An info prompt
          <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>
        </Alert>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MisPageTitle from '../components/MisPageTitle'

@Component({
  name: 'StepForm',
  components: {
    MisPageTitle
  }
})
export default class StepForm extends Vue {
  current: Number = 1
  formValidate = {
    name: '',
    mail: '',
    city: '',
    gender: '',
    interest: [],
    date: '',
    time: '',
    desc: ''
  };

  ruleValidate = {
    name: [
      { required: true, message: 'The name cannot be empty', trigger: 'blur' }
    ],
    mail: [
      { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
      { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
    ],
    city: [
      { required: true, message: 'Please select the city', trigger: 'change' }
    ],
    gender: [
      { required: true, message: 'Please select gender', trigger: 'change' }
    ],
    interest: [
      {
        required: true,
        type: 'array',
        min: 1,
        message: 'Choose at least one hobby',
        trigger: 'change'
      },
      {
        type: 'array',
        max: 2,
        message: 'Choose two hobbies at best',
        trigger: 'change'
      }
    ],
    date: [
      {
        required: true,
        type: 'date',
        message: 'Please select the date',
        trigger: 'change'
      }
    ],
    time: [
      {
        required: true,
        type: 'string',
        message: 'Please select time',
        trigger: 'change'
      }
    ],
    desc: [
      {
        required: true,
        message: 'Please enter a personal introduction',
        trigger: 'blur'
      },
      {
        type: 'string',
        min: 20,
        message: 'Introduce no less than 20 words',
        trigger: 'blur'
      }
    ]
  };

  handleSubmit (name: any) {
    // this.$refs[name].validate((valid) => {
    //     if (valid) {
    //         this.$Message.success('Success!');
    //     } else {
    //         this.$Message.error('Fail!');
    //     }
    // })
  }

  handleReset (name: any) {
    // this.$refs[name].resetFields();
  }
}
</script>

<style lang="less" scoped>
.step-form {
  min-height: 75vh;
  margin-top: 44px;
  &-content {
    padding: 15px 15px;
  }
}
</style>
