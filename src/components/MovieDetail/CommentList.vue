<template>
  <div>
    CommentList
    <CommentItem
    v-for="comment in  $store.state.Comments_about_Movie"
    :key="comment.pk"
    :comment="comment"
    />
  </div>
</template>

<script>
import CommentItem from '@/components/MovieDetail/CommentItem'

export default {
  name: 'CommentList',
  components: {
    CommentItem,
  }
}
</script>

<style>

</style>