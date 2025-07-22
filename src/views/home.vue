<template>
  <div class="home">
    <header>
      <PrimaryNav></PrimaryNav>
      <SortBy></SortBy>
    </header>
    <main>
      <SortBy></SortBy>
      <section v-if="suggessList">
        <SuggesstionBox
          v-for="item in suggessList"
          :key="item.id"
          :item="item"
          @click="goToDetail(item)"
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
// import data from '@/db/data.json'
import PrimaryNav from '@/components/PrimaryNav.vue'
import SortBy from '@/components/SortBy.vue'
import SuggesstionBox from '@/components/SuggesstionBox.vue'
export default {
  name: 'HomeView',
  components: {
    PrimaryNav, SortBy, SuggesstionBox
  },
  methods: {
    goToDetail (item) {
      this.$store.commit('suggdata/setCurrentItem', item)
      this.$router.push(`/detail/${item.id}`)
    }
  },
  created () {
    this.$store.dispatch('suggdata/loadSuggData')
    // console.log(data)
  },
  computed: {
    suggessList () {
      return this.$store.getters['suggdata/getSuggData']
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: @blue-bgc;
  min-height: 100vh;
  main {
    .sort {
      display: none;
    }
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

@media (min-width: 768px) {
  .home {
    main {
      padding: 24px 40px 54px 39px;
      .suggest_null {
        height: calc(100vh - 424px);
        min-height: 400px;
        margin: 0;
        .null_img {
          width: 130px;
          height: 137px;
          margin-bottom: 53px;
        }
        .null_title {
          font-size: 24px;
          margin-bottom: 16px;
        }
        .null_msg {
          font-size: 16px;
          width: 410px;
          margin-bottom: 48px;
        }
        .null_btn {
          width: 158px;
          height: 44px;
          font-size: 14px;
        }
      }
    }
  }
}

@media (min-width: 1440px) {
  .home {
    display: flex;
    justify-content: space-between;
    padding: 94px 165px 129px;
    header {
      margin-right: 30px;
      .sort {
        display: none;
      }
    }
    main {
      padding: 0;
      min-width: 825px;
      width: 100%;
      .sort {
        display: flex;
        margin-bottom: 24px;
      }
      .suggesstion_box {
        margin-bottom: 20px;
      }
      .suggest_null {
        height: calc(100vh - 319px);
        min-height: 500px;
        margin: 0;
        .null_img {
          width: 140px;
          height: 140px;
        }
      }
    }
  }
}
</style>
