<template>
  <div class="detail">
    <header>
      <GoBack></GoBack>
      <button class="detail_btn" @click="$router.push('/edit')">Edit Feedback</button>
    </header>
    <main>
      <SuggesstionBox v-if="currentItem" :item="currentItem"></SuggesstionBox>
      <section class="detail_comments" v-if="cuttentComment.length !== 0">
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
        <textarea
          cols="30"
          rows="10"
          placeholder="Type your comment here"
          v-model="commentContent"
        ></textarea>
        <div class="btn_count">
          <span>{{charactersLeft}} Characters left</span>
          <button class="add_btn" @click="postComment" :disabled="!commentContent.trim()">Post Comment</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { Toast } from 'vant'
import GoBack from '@/components/GoBack.vue'
import SuggesstionBox from '@/components/SuggesstionBox.vue'
export default {
  name: 'DetailView',
  components: {
    GoBack, SuggesstionBox
  },
  data () {
    return {
      commentContent: ''
    }
  },
  computed: {
    currentItem () {
      return this.$store.getters['suggdata/getCurrentItem']
    },
    cuttentComment () {
      return this.currentItem?.comments || []
    },
    charactersLeft () {
      return 250 - (this.commentContent?.length || 0)
    }
  },
  created () {
    if (!this.currentItem) {
      this.$router.replace('/') // 防止直接访问页面时为空
    }
    console.log(this.currentItem)
  },
  methods: {
    resolveImage (imagePath) {
      // 去掉路径中的 ./assets 前缀
      const imageName = imagePath.replace('./assets/user-images/', '')
      return require(`@/assets/user-images/${imageName}`)
    },
    async postComment () {
      if (!this.commentContent.trim()) return
      try {
        await this.$store.dispatch('suggdata/addComment', {
          feedbackId: this.currentItem.id,
          content: this.commentContent.trim()
        })
        // 清空评论框
        this.commentContent = ''
        // 成功提示
        Toast.success('Comment posted successfully!')
      } catch (error) {
        console.error('Failed to post comment:', error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/detail.less';
</style>
