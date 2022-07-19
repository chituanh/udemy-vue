<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading">Loading.......</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        Không có dữ liệu nè
      </p>
      
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';
export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async loadExperiences() {
      this.isLoading = true;
      try {
        const res = await axios.get(
          'https://vue-http-demo-6df8a-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json'
        );
        this.results = [];
        for (var i in res.data)
          this.results.push({
            id: i,
            name: res.data[i].name,
            rating: res.data[i].rating,
          });
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.error = 'Có lỗi xảy ra rùi nè ';
        console.log('cayf');
      }
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>