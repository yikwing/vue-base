<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:150px" />

    <!-- <h1>clash subscript</h1> -->

    <el-row :gutter="10">
      <el-col :xs="2" :sm="6" :md="4" :lg="6" :xl="6">
        <div class="grid-content bg-purple"></div
      ></el-col>
      <el-col :xs="20" :sm="12" :md="16" :lg="12" :xl="12">
        <div style="text-align:left;margin-bottom:10px">订阅链接</div>
        <el-input
          type="textarea"
          :rows="6"
          placeholder="请输入订阅链接"
          v-model="textarea"
        >
        </el-input
      ></el-col>

      <el-col :xs="2" :sm="6" :md="4" :lg="6" :xl="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :xs="2" :sm="6" :md="4" :lg="6" :xl="6"
        ><div class="grid-content bg-purple"></div
      ></el-col>
      <el-col :xs="20" :sm="12" :md="16" :lg="12" :xl="12">
        <div style="float:right;margin-left:10px;margin-top:10px">
          <el-button type="primary" @click="buildSub('clash')"
            >生成 Clash 订阅</el-button
          >
        </div>
        <div style="float:right;margin-top:10px">
          <el-button type="success" @click="buildSub('surge')"
            >生成 Surge 托管</el-button
          >
        </div>
      </el-col>

      <el-col :xs="2" :sm="6" :md="4" :lg="6" :xl="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {
      textarea: ''
    }
  },
  methods: {
    buildSub(type) {
      var baseUrl

      switch (type) {
        case 'clash':
          baseUrl = 'https://api.caonima.live/sub?target=clash&url='
          break
        case 'surge':
          baseUrl = 'https://api.caonima.live/sub?target=surge&ver=4&url='
          break
      }

      var subscriptList = this.textarea.split(/[\s\n]/)

      subscriptList.forEach((item, index) => {
        if (index == subscriptList.length - 1) {
          baseUrl = baseUrl + encodeURIComponent(item)
        } else {
          baseUrl = baseUrl + encodeURIComponent(item) + '%7C'
        }
      })

      this.$copyText(baseUrl).then(
        () => {
          this.$message({
            message: '已成功复制到剪切板',
            type: 'success'
          })
        },
        (error) => {
          this.$message.error(error)
        }
      )
    }
  }
}
</script>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  /* background: #99a9bf; */
  background: #ffffff;
}
.bg-purple {
  /* background: #d3dce6; */
  background: #ffffff;
}
.bg-purple-light {
  /* background: #e5e9f2; */
  background: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
