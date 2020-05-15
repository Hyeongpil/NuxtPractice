<template>
  <div>
    <div class="card rounded-t-lg">
      <div class="card-image p-1">
        <figure class="image is-16by9 relative">
          <img
            class="rounded-t-lg"
            src="https://www.canva.com/learn/wp-content/uploads/2018/08/ComposeStunningImages7-tb-800x0.jpg"
          />
        </figure>
        <b-icon
          class="absolute top-0 left-0 m-2 cursor-pointer"
          icon="account"
          size="is-small"
        >
        </b-icon>
        <b-button rounded size="is-small" class="absolute top-0 right-0 m-3"
          >입장하기</b-button
        >
      </div>
      <div class="card-content">
        <p class="title is-6">
          {{ title }}
        </p>
        <!-- <strong class="">{{ book.volumeInfo.subtitle }}</strong> -->

        <div class="content">
          <p>
            {{ date }}
          </p>
          <br />
          <!-- <time :datetime="book.volumeInfo.publishedDate">{{ date }}</time> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss"></style>
