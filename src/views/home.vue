<template>
  <div class="home">
    <header>
      <PrimaryNav></PrimaryNav>
      <SortBy></SortBy>
    </header>
    <main>
      <section v-if="suggessList.length > 0">
        <SuggesstionBox
          v-for="item in suggessList"
          :key="item.id"
          :item="item"
        ></SuggesstionBox>
      </section>
      <section class="suggest_null" v-else>
        <img src="@/assets/suggestions/illustration-empty.svg" alt="" class="null_img">
        <h3 class="null_title">
          There is no feedback yet.
        </h3>
        <p class="null_msg">
          Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
        </p>
        <button class="null_btn">+ Add Feedback</button>
      </section>
    </main>
  </div>
</template>

<script>
import PrimaryNav from '@/components/PrimaryNav.vue'
import Data from '@/db/data.json'
import SortBy from '@/components/SortBy.vue'
import SuggesstionBox from '@/components/SuggesstionBox.vue'
export default {
  name: 'HomeView',
  components: {
    PrimaryNav, SortBy, SuggesstionBox
  },
  data () {
    return {
      suggessList: null
    }
  },
  created () {
    this.suggessList = Data.productRequests
    console.log(this.suggessList)
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: @blue-bgc;
  min-height: 100vh;
  main {
    padding: 32px 24px 39px;
    .suggesstion_box {
      margin-bottom: 16px;
    }
    .suggest_null {
      height: calc(100vh - 207px);
      margin-bottom: 8px;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 24px;
      justify-content: center;
      .null_img {
        margin-bottom: 39px;
      }
      .null_title {
        margin-bottom: 14px;
        font-size: 18px;
        font-weight: bold;
        letter-spacing: -0.25px;
        color: @grey-btn;
      }
      .null_msg {
        margin-bottom: 24px;
        font-size: 13px;
        text-align: center;
        color: @gery-font-q;
      }
      .null_btn {
        width: 134px;
        height: 40px;
        border-radius: 10px;
        background: #AD1FEA;
        border: none;
        font-size: 13px;
        font-weight: bold;
        color: @grey-bgc-q;
      }
    }
  }
}
</style>
