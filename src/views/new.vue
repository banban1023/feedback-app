<template>
  <div class="new">
    <header>
      <GoBack></GoBack>
    </header>
    <main>
      <img src="@/assets/shared/icon-new-feedback.svg" alt="" class="new_icon">
      <form class="new_form" @submit.prevent="submitForm">
        <h2 class="form_title">Create New Feedback</h2>
        <label for="name">Feedback Title
          <p class="form_submittitle">Add a short, descriptive headline</p>
          <input class="form_name" type="text" id="name" name="name" v-model="formData.title">
        </label>
        <label for="select">Category
          <p class="form_submittitle">Choose a category for your feedback</p>
          <el-select id="select" v-model="formData.category">
          <el-option
            v-for="item in tags"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </label>
        <label for="detail">Feedback Detail
          <p class="form_submittitle">Include any specific comments on what should be improved, added, etc.</p>
          <textarea name="detail" id="detail" rows="5" v-model="formData.detail"></textarea>
        </label>
        <section class="form_btn">
          <button type="submit" class="form_add">Add Feedback</button>
          <button class="form_cancel">Cancel</button>
        </section>
      </form>
    </main>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'
export default {
  name: 'NameView',
  components: {
    GoBack
  },
  data () {
    return {
      tags: [
        {
          value: 'Feature',
          label: 'Feature'
        },
        {
          value: 'UI',
          label: 'UI'
        },
        {
          value: 'UX',
          label: 'UX'
        },
        {
          value: 'Enhancement',
          label: 'Enhancement'
        },
        {
          value: 'Bug',
          label: 'Bug'
        }],
      value: 'Feature',
      formData: {
        title: '',
        category: 'Feature',
        detail: ''
      }
    }
  },
  methods: {
    submitForm () {
      const newFeedback = {
        id: Date.now(), // 简单生成唯一 ID
        title: this.formData.title,
        category: this.formData.category,
        upvotes: 0,
        status: 'suggestion', // 默认状态
        description: this.formData.detail,
        comments: []
      }

      // 提交给 Vuex
      this.$store.commit('suggdata/addSuggestion', newFeedback)

      // 跳转回首页
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.new {
  color: @grey-btn;
  header {
    height: 88px;
    padding: 0 24px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  main {
    padding: 20px 24px 77px;
    position: relative;
    .new_icon {
      position: absolute;
      z-index: 3;
      width: 40px;
      top: 0;
      left: 48px;
    }
    .new_form {
      width: 100%;
      background-color: #fff;
      border-radius: 10px;
      padding: 44px 24px 24px;
      .form_title {
        font-size: 18px;
        letter-spacing: -0.25px;
      }
      label {
        display: block;
        margin-top: 24px;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: -0.18px;
        .form_submittitle {
          font-size: 13px;
          font-weight: normal;
          color: @gery-font-q;
          margin-top: 3px;
          margin-bottom: 16px;
        }
        .form_name {
          width: 100%;
          height: 48px;
          border-radius: 5px;
          background-color: @blue-bgc;
          border: none;
        }
        ::v-deep(.el-input) {
          display: block;
          .el-input__inner {
            height: 48px;
            border-radius: 5px;
            background: @blue-bgc;
            border: none;
            font-weight: normal;
            padding-left: 16px;
            color: @grey-btn;
            &::placeholder {
              color: @grey-btn;
            }
          }
        }
        textarea {
          resize: none;
          width: 100%;
          height: 120px;
          border-radius: 5px;
          background: @blue-bgc;
          border: none;
        }
      }
      .form_add {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        background: @purple-btn;
        font-size: 13px;
        font-weight: bold;
        color: @grey-bgc-q;
        border: none;
        margin-top: 40px;
      }
      .form_cancel {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        background: @grey-btn;
        font-size: 13px;
        font-weight: bold;
        color: @grey-bgc-q;
        border: none;
        margin-top: 16px;
      }
    }
  }
}
@media (min-width: 768px) {
  .new {
    header {
      height: 114px;
      padding: 0 114px;
    }
    main {
      padding: 20px 114px 0;
      .new_icon {
        left: 156px;
      }
      .new_form {
        padding: 52px 42px 40px;
        .form_title {
          font-size: 24px;
        }
        label {
          font-size: 14px;
          .form_submittitle {
            font-size: 14px;
          }
          textarea {
            height: 96px;
          }
        }
        .form_btn {
          margin-top: 30px;
          display: flex;
          flex-direction: row-reverse;
          .form_add, .form_cancel {
            margin-top: 0;
          }
          .form_add {
            width: 144px;
            height: 44px;
            margin-left: 16px;
          }
          .form_cancel {
            width: 93px;
            height: 44px;
          }
        }
      }
    }
  }
}

@media (min-width: 1440px) {
  .new {
    padding-top: 80px;
    header {
      height: 68px;
      align-items: start;
      padding: 0 450px;
    }
    main {
      padding: 28px 450px 0;
      .new_icon {
        left: 492px;
        width: 56px;
        height: 56px;
      }
    }
  }
}
</style>
