<template>
  <div class="suggesstion_box" @click="$emit('click')">
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
@import '@/styles/suggestBox.less';
</style>
