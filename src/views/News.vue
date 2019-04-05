<template>
  <div>
    <b-container>
      <div class="profile">
        <h2 class="profile__head">News</h2>
        <div class="profile__section">
          {{getNews}}
          <b-list-group class="profile__list" v-for="(newsN, newsId) in newsTitle" :key="newsId">
            <b-list-group-item class="profile__list__item" variant="dark">{{newsN}}</b-list-group-item>
            <b-list-group-item class="profile__list__item" variant="light">{{newsText[newsId]}}</b-list-group-item>
          </b-list-group>
        </div>
        <b-alert show variant="success" class="news__amount">Количество новостей: {{newsAmount}}</b-alert>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsTitle: [],
      newsText: [],
      newsAmount: ""
    };
  },
  computed: {
    getNews: function() {
      let news;
      let getNewsRequest = new XMLHttpRequest();
      getNewsRequest.open(
        "GET",
        "https://mysterious-reef-29460.herokuapp.com/api/v1/news",
        true
      );
      getNewsRequest.send();
      getNewsRequest.onreadystatechange = () => {
        if (getNewsRequest.readyState != 4) return;

        if (getNewsRequest.status != 200) {
          alert(getNewsRequest.status + ": " + getNewsRequest.statusText);
        } else {
          news = JSON.parse(getNewsRequest.responseText);

          for (let index = 0; index < news.data.length; index++) {
            this.newsTitle[index] = news.data[index].title;
            this.newsText[index] = news.data[index].text;
            this.newsAmount = news.data.length;
          }
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.news__amount {
  position: relative;
  margin-top: 50px;
}
.profile {
  padding-bottom: 50px;

  &__list {
    margin-bottom: 20px;
  }
}
</style>