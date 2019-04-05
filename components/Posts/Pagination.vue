<template>
  <div v-if="totalPages() > 0" class="pagination-wrapper">
    <span v-if="showPreviousLink()" class="pagination-btn" @click="updatePage(currentPage - 1)">
      <v-btn fab dark small color="#1867c0 !important">
        <v-icon dark>remove</v-icon>
      </v-btn>
    </span>

    <span class="headline">{{ currentPage + 1 }} of {{ totalPages() }}</span>

    <span v-if="showNextLink()" class="pagination-btn" @click="updatePage(currentPage + 1)">
      <v-btn fab dark small color="#cc4949 !important">
        <v-icon dark>add</v-icon>
      </v-btn>
    </span>
  </div>
</template>

<script src="./pagination.js"></script>
<style src="./pagination.css"></style>
