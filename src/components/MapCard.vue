<template>
  <div class="map_card">
    <div class="top_color" :style="{backgroundColor: color}"></div>
    <ul>
      <li>
        <p class="map_status"><span class="cricle" :style="{backgroundColor: color}"></span>{{item.status}}</p>
        <h4 class="map_title">{{item.title}}</h4>
        <p class="map_description">{{item.description}}</p>
        <p class="map_category">{{item.category}}</p>
        <div class="map_btn">
          <button class="map_upvotes">{{item.upvotes}}</button>
          <button class="map_comments">{{item.comments?.length || 0}}</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.map_card {
  .top_color {
    height: 6px;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
  }
  ul {
    background-color: #fff;
    padding: 16px 24px 24px;
    border-radius: 0 0 10px 10px;
    li {
      .map_status {
        font-size: 13px;
        color: @gery-font-q;
        .cricle {
          width: 8px;
          height: 8px;
          display: inline-block;
          margin-right: 5px;
          border-radius: 50%;
        }
      }
      .map_title {
        font-size: 13px;
        font-weight: bold;
        letter-spacing: -0.18px;
        color: @grey-btn;
        margin-top: 16px;
      }
      .map_description {
        font-size: 13px;
        color: @gery-font-q;
        margin-top: 9px;
      }
      .map_category {
        height: 30px;
        display: inline-block;
        border-radius: 10px;
        background: @grey-bgc-q;
        padding: 5px 15px;
        font-size: 13px;
        color: @blue-font;
        margin-top: 8px;
      }
      .map_btn {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
        align-items: center;
        .map_upvotes {
          padding: 5px 15px 5px 34px;
          position: relative;
          border-radius: 10px;
          background: @grey-bgc-q;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: -0.18px;
          color: @grey-btn;
          border: none;
          &:hover {
            background-color: #CFD7FF;
            cursor: pointer;
          }
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 15px;
            transform: translateY(-50%);
            width: 8px;
            height: 4px;
            background: url('../assets/shared/icon-arrow-up.svg') no-repeat center center / cover;
          }
        }
        .map_comments {
          position: relative;
          height: 19px;
          padding-left: 22px;
          line-height: 19px;
          font-size: 13px;
          font-weight: bold;
          text-align: center;
          letter-spacing: -0.18px;
          border: none;
          color: @grey-btn;
          background-color: transparent;
          &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 18px;
            height: 16px;
            background: url('../assets/shared/icon-comments.svg') no-repeat center center / cover;
          }
        }
      }
    }
  }
}
</style>
