<template>
  <div class="edit">
    <header>
      <GoBack></GoBack>
    </header>
    <main>
      <img src="@/assets/shared/icon-edit-feedback.svg" alt="" class="edit_icon">
      <form class="edit_form" action="">
        <h2 class="form_title">Editing ‘Add a dark theme option’</h2>
        <label for="name">Feedback Title
          <p class="form_submittitle">Add a short, descriptive headline</p>
          <input class="form_name" type="text" id="name" name="name">
        </label>
        <label for="select">Category
          <p class="form_submittitle">Choose a category for your feedback</p>
          <el-select id="select" v-model="value">
          <el-option
            v-for="item in tags"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </label>
        <label for="update">Update Status
          <p class="form_submittitle">Change feature state</p>
          <el-select id="update" v-model="stateValue">
          <el-option
            v-for="item in state"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </label>
        <label for="detail">Feedback Detail
          <p class="form_submittitle">Include any specific comments on what should be improved, added, etc.</p>
          <textarea name="detail" id="detail" rows="5"></textarea>
        </label>
        <section class="form_btn">
          <div class="btn_right">
            <button type="submit" class="form_add">Save Changes</button>
            <button class="form_cancel">Cancel</button>
          </div>
          <button class="form_delete">Delete</button>
        </section>
      </form>
    </main>
  </div>
</template>

<script>
import GoBack from '@/components/GoBack.vue'
export default {
  name: 'EditView',
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
      state: [
        {
          value: 'Suggestion',
          label: 'Suggestion'
        },
        {
          value: 'Planned',
          label: 'Planned'
        },
        {
          value: 'In-Progress',
          label: 'In-Progress'
        },
        {
          value: 'Live',
          label: 'Live'
        }],
      stateValue: 'Suggestion'
    }
  }
}
</script>

<style lang="less" scoped>
.edit {
  header {
    height: 88px;
    display: flex;
    align-items: center;
    padding: 0 24px;
  }
  main {
    padding: 20px 24px 77px;
    position: relative;
    .edit_icon {
      position: absolute;
      z-index: 3;
      width: 40px;
      top: 0;
      left: 48px;
    }
    .edit_form {
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
      .form_delete {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        background: @red-btn;
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
  .edit {
    header {
      height: 114px;
      padding: 0 114px;
    }
    main {
      padding: 20px 114px 0;
      .edit_icon {
        left: 156px;
      }
      .edit_form {
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
          justify-content: space-between;
          .form_add, .form_cancel {
            margin-top: 0;
          }
          .form_add {
            width: 144px;
            height: 44px;
            margin-left: 16px;
          }
          .btn_right {
            width: 253px;
            display: flex;
            justify-content: space-between;
            .form_cancel {
              width: 93px;
              height: 44px;
            }
            .form_add {
              margin-left: 0;
            }
          }
          .form_delete {
            width: 93px;
            height: 44px;
            margin-top: 0;
          }
        }
      }
    }
  }
}

@media (min-width: 1440px) {
  .edit {
    padding-top: 80px;
    header {
      height: 68px;
      align-items: start;
      padding: 0 450px;
    }
    main {
      padding: 28px 450px 0;
      .edit_icon {
        left: 492px;
        width: 56px;
        height: 56px;
      }
    }
  }
}
</style>
