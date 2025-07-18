<template>
  <div class="suggesstion_box">
    <section class="sug_left">
      <article>
        <h3 class="sug_title">{{item.title}}</h3>
        <p class="sug_msg">{{item.description}}</p>
        <span class="sug_tag">{{item.category}}</span>
      </article>
      <button class="sug_good"><i class="sug_allow"></i>{{item.upvotes}}</button>
    </section>
    <button class="sug_comment"><i class="sug_com"></i>{{item.comments?.length || 0}}</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.suggesstion_box {
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  padding: 24px;
  position: relative;
  .sug_left {
    article {
      .sug_title {
        font-size: 13px;
        letter-spacing: -0.18px;
        color: @grey-btn;
        margin-bottom: 9px;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .sug_msg {
        font-size: 13px;
        color: @gery-font-q;
        height: 38px;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

      }
      .sug_tag {
        display: inline-block;
        height: 30px;
        padding: 5px 14px;
        background-color: @grey-bgc-q;
        border-radius: 10px;
        color: @blue-font;
        margin-top: 8px;
      }
    }
    .sug_good {
      margin-top: 16px;
      height: 32px;
      border-radius: 10px;
      background-color: @grey-bgc-q;
      border: none;
      color: @grey-btn;
      padding: 0 13px 0 16px;
      font-size: 13px;
      font-weight: bold;
      text-align: center;
      letter-spacing: -0.18px;
      .sug_allow {
        display: inline-block;
        background: url('@/assets/shared/icon-arrow-up.svg') no-repeat center center / cover;
        width: 8px;
        height: 4px;
        margin-bottom: 2px;
        margin-right: 8px;
      }
    }
  }
  .sug_comment {
    position: absolute;
    display: flex;
    align-items: center;
    top: 150px;
    right: 24px;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: -0.18px;
    color: @grey-btn;
    background-color: transparent;
    border: none;
    .sug_com {
      display: inline-block;
      width: 18px;
      height: 16px;
      margin-right: 4px;
      background: url('@/assets/shared/icon-comments.svg') no-repeat center center/ cover;
    }

  }
}
</style>
