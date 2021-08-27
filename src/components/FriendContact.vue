<template>
  <li>
    <h2>{{ name }} {{ isFavourite }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsIsVisible">
      <li>{{ email }}</li>
      <li>{{ phone }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      detailsIsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsIsVisible = !this.detailsIsVisible;
    },
  },
};
</script>
