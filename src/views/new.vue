<template>
  <div class="new">
    <header>
      <GoBack></GoBack>
    </header>
    <main>
      <img src="@/assets/shared/icon-new-feedback.svg" alt="" class="new_icon">
      <form class="new_form" action="">
        <h2 class="form_title">Create New Feedback</h2>
        <label for="name">Feedback Title
          <p class="form_submittitle">Add a short, descriptive headline</p>
          <input class="form_name" type="text" id="name" name="name">
        </label>
        <label for="select">Category
          <p class="form_submittitle">Choose a category for your feedback</p>
          <select id="select" class="form_select">
            <option value="">Feature</option>
            <option value="option1">选项1</option>
            <option value="option2">选项2</option>
            <option value="option3">选项3</option>
          </select>
        </label>
        <label for="detail">Feedback Detail
          <p class="form_submittitle">Include any specific comments on what should be improved, added, etc.</p>
          <textarea name="detail" id="detail" rows="5"></textarea>
        </label>
        <button type="submit" class="form_add">Add Feedback</button>
        <button class="form_cancel">Cancel</button>
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
        }
        .form_name {
          width: 100%;
          height: 48px;
          border-radius: 5px;
          background-color: @blue-bgc;
          border: none;
        }
      }
    }
  }
}
</style>
