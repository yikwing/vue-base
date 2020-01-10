<template>
  <div class="about">
    <h1>This is A page</h1>
    <el-button @click="add" style="height:60px;width:100px;font-size:30px">
      {{ acount }}
    </el-button>
    <el-button
      type="success"
      plain
      @click="addN(10)"
      style="height:60px;width:100px;font-size:30px;margin-left:10px"
    >
      {{ acount }}
    </el-button>

    <el-button
      @click="addAsync"
      style="height:60px;width:200px;font-size:30px;margin-left:10px"
    >
      异步: {{ acount }}
    </el-button>

    <p style="font-weight:bold;font-size:20px">{{ showANum }}</p>
    <br />
    <h1>This is B page</h1>
    <el-button @click="sub" style="height:60px;width:100px;font-size:30px">
      {{ count }}
    </el-button>
    <el-button
      type="success"
      plain
      @click="subN(10)"
      style="height:60px;width:100px;font-size:30px;margin-left:10px"
    >
      {{ count }}
    </el-button>

    <el-button
      @click="subAsync"
      style="height:60px;width:200px;font-size:30px;margin-left:10px"
    >
      异步: {{ count }}
    </el-button>

    <p style="font-weight:bold;font-size:20px">{{ showNum }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { getWxList } from './../api'
export default {
  // computed: mapState({
  //   // count: state => state.count,
  //   count: 'count'
  // }),
  created() {
    getWxList({ postId: 1 })
      .then(() => {
        // console.log(res)
      })
      .catch(() => {
        // console.log(err)
      })
  },
  computed: {
    ...mapState('a', ['acount']),
    ...mapState('b', ['count']),
    ...mapGetters('a', ['showANum']),
    ...mapGetters('b', ['showNum'])
  },
  methods: {
    // add() {
    //   this.$store.commit('add')
    // },
    // addN() {
    //   this.$store.commit('addN', 10)
    // }
    ...mapMutations('a', ['add', 'addN']),
    ...mapMutations('b', ['sub', 'subN']),
    ...mapActions('a', ['addAsync']),
    ...mapActions('b', ['subAsync'])

    // add1() {
    //   this.add()
    // },
    // addN1() {
    //   this.addN(10)
    // },
    // addAsync100() {
    //   this.addAsync()
    // }
  }
}
</script>
