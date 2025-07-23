<template>
  <div class="detail">
    <header>
      <GoBack></GoBack>
      <button class="detail_btn">Edit Feedback</button>
    </header>
    <main>
      <SuggesstionBox v-if="currentItem" :item="currentItem"></SuggesstionBox>
      <section class="detail_comments">
        <h3 class="detail_title">{{cuttentComment.length}} Comments</h3>
        <ul class="comments_sug">
          <li
            v-for="item in cuttentComment"
            :key="item.id"
          >
            <section class="comment_user">
              <img class="comment_avatar" :src="resolveImage(item.user.image)" alt="">
              <div class="info">
                <p class="comment_name">{{item.user.name}}</p>
                <p class="comment_username">@{{item.user.username}}</p>
              </div>
              <button class="reply_btn">Reply</button>
            </section>
            <p class="comment_msg">{{item.content}}</p>
            <ul class="comment_replies" v-if="item.replies">
              <li
                v-for="reply in item.replies"
                :key="reply.id"
                class="reply_li"
              >
                <section class="comment_user">
                <img class="comment_avatar" :src="resolveImage(reply.user.image)" alt="">
                <div class="info">
                  <p class="comment_name">{{reply.user.name}}</p>
                  <p class="comment_username">@{{reply.user.username}}</p>
                </div>
                <button class="reply_btn">Reply</button>
              </section>
              <p class="comment_msg"><!-- @{{***}} -->{{reply.content}}</p>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="add_comment">
        <h3 class="add_title">
          Add Comment
        </h3>
        <textarea name="" id="" cols="30" rows="10" placeholder="Type your comment here"></textarea>
        <div class="btn_count">
          <span>250 Characters left</span>
          <button class="add_btn">Post Comment</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'
import SuggesstionBox from '@/components/SuggesstionBox.vue'
export default {
  name: 'DetailView',
  components: {
    GoBack, SuggesstionBox
  },
  computed: {
    currentItem () {
      return this.$store.getters['suggdata/getCurrentItem']
    },
    cuttentComment () {
      return this.currentItem?.comments || []
    }
  },
  created () {
    if (!this.currentItem) {
      // 这里可以做兜底，比如返回首页或者重新拉数据
      this.$router.replace('/') // 防止直接访问页面时为空
    }
    console.log(this.currentItem)
  },
  methods: {
    resolveImage (imagePath) {
      // 去掉路径中的 ./assets 前缀
      const imageName = imagePath.replace('./assets/user-images/', '')
      return require(`@/assets/user-images/${imageName}`)
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/detail.less';
</style>
