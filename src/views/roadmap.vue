<template>
  <div class="roadmap">
    <header>
      <div class="map_header_left">
        <GoBack></GoBack>
        <h2 class="map_title">Roadmap</h2>
      </div>
      <button class="header_btn">
        + Add Feedback
      </button>
    </header>
    <main>
      <van-tabs v-model="active">
        <van-tab :title="`Planned (${plannedCount})`">
          <h3 class="map_van_title">Planned ({{plannedCount}})</h3>
          <p class="map_submit">Ideas prioritized for research</p>
          <MapCard
            v-for="item in plannedList"
            :key="item.id"
            :item="item"
            :color="'#F49F85'"
          ></MapCard>
        </van-tab>

        <van-tab :title="`In-Progress (${progressCount})`">
          <h3 class="map_van_title">In-Progress ({{progressCount}})</h3>
          <p class="map_submit">Currently being developed</p>
          <MapCard
            v-for="item in progressList"
            :key="item.id"
            :item="item"
            :color="'#AD1FEA'"
          ></MapCard>
        </van-tab>

        <van-tab :title="`Live (${liveCount})`">
          <h3 class="map_van_title">Live ({{liveCount}})</h3>
          <p class="map_submit">Released features</p>
          <MapCard
            v-for="item in liveList"
            :key="item.id"
            :item="item"
            :color="'#62BCFA'"
          ></MapCard>
        </van-tab>
      </van-tabs>
      <ul class="middle_card">
        <li>
          <h3 class="map_van_title">Planned ({{plannedCount}})</h3>
          <p class="map_submit">Ideas prioritized for research</p>
          <MapCard
            v-for="item in plannedList"
            :key="item.id"
            :item="item"
            :color="'#F49F85'"
          ></MapCard>
        </li>
        <li>
          <h3 class="map_van_title">In-Progress ({{progressCount}})</h3>
          <p class="map_submit">Currently being developed</p>
          <MapCard
            v-for="item in progressList"
            :key="item.id"
            :item="item"
            :color="'#AD1FEA'"
          ></MapCard>
        </li>
        <li>
          <h3 class="map_van_title">Live ({{liveCount}})</h3>
          <p class="map_submit">Released features</p>
          <MapCard
            v-for="item in liveList"
            :key="item.id"
            :item="item"
            :color="'#62BCFA'"
          ></MapCard>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'
import { mapGetters } from 'vuex'
import MapCard from '@/components/MapCard.vue'
export default {
  name: 'RoadMap',
  components: {
    GoBack,
    MapCard
  },
  data () {
    return {
      active: 0
    }
  },
  computed: {
    ...mapGetters('suggdata', ['plannedCount', 'progressCount', 'liveCount', 'getSuggData']),
    plannedList () {
      return this.getSuggData
        ? this.getSuggData.filter(item => item.status === 'planned')
        : []
    },
    progressList () {
      return this.getSuggData
        ? this.getSuggData.filter(item => item.status === 'in-progress')
        : []
    },
    liveList () {
      return this.getSuggData
        ? this.getSuggData.filter(item => item.status === 'live')
        : []
    }
  },
  created () {
    this.$store.dispatch('suggdata/loadSuggData')
  }
}
</script>

<style lang="less" scoped>
.roadmap {
  header {
    background-color: @grey-bgi;
    padding: 0 24px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .goback {
      color: #fff;
    }
    .map_title {
      font-size: 18px;
      letter-spacing: -0.25px;
      color: #FFFFFF;
    }
    .header_btn {
      width: 134px;
      height: 40px;
      border-radius: 10px;
      background: @purple-btn;
      border: none;
      font-size: 13px;
      font-weight: bold;
      color: @grey-bgc-q;
      &:hover {
        background-color: @purple-btn-hover;
        cursor: pointer;
      }
    }
  }
  main {
    ::v-deep .van-tabs__wrap {
      height: 60px;
      border-bottom: 1px solid rgba(140, 146, 179, 0.25);
      .van-tabs__nav {
        background-color: transparent;
        .van-tab {
          font-size: 13px;
          font-weight: bold;
          text-align: center;
          letter-spacing: -0.18px;
          color: @grey-btn;
          opacity: 0.4;
        }
        .van-tab--active {
          opacity: 1;
        }
        .van-tabs__line {
          width: calc(100%/3);
          background: @purple-btn;
        }
      }
    }
    .van-tab__pane {
      padding: 24px;
      .map_card {
        margin-top: 16px;
      }
      .map_van_title {
        font-size: 18px;
        font-weight: bold;
        letter-spacing: -0.25px;
        color: @grey-btn;
      }
      .map_submit {
        margin-top: 4px;
        font-size: 13px;
        color: @gery-font-q;
      }
    }
  }
}

@media (min-width: 768px) {
  .roadmap {
    main {
      padding: 32px 40px 0;
      .van-tabs {
        display: none;
      }
      .middle_card {
        display: flex;
        .map_card {
          margin-top: 16px;
        }
        li {
          margin-right: 10px;
          width: calc((100% - 20px) / 3);
          .map_van_title {
            font-size: 18px;
            font-weight: bold;
            letter-spacing: -0.25px;
            color: @grey-btn;
          }
          .map_submit {
            margin-top: 4px;
            font-size: 13px;
            color: @gery-font-q;
            margin-bottom: 24px;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }
}
@media (min-width: 1440px) {
  .roadmap {
    padding: 78px 165px;
    header {
      border-radius: 10px;
      height: 113px;
      .map_header_left {
        .map_title {
          font-size: 24px;
          margin-top: 4px;
        }
      }
      .header_btn {
        width: 158px;
        height: 44px;
      }
    }
    main {
      padding: 48px 0 0 0;
      .van-tabs {
        display: none;
      }
      .middle_card {
        display: flex;
        .map_card {
          margin-top: 24px;
        }
        li {
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
          .map_submit {
            margin-bottom: 32px;
          }
        }
      }
    }
  }
}
</style>
