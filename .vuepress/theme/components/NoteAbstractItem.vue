<template>
  <div
    class="abstract-item"
    @click="$router.push(item.path)">
    <i v-if="this.currentPage == 1 && (this.index_postion_num == 0 || this.index_postion_num == 1)" class="iconfont reco-sticky"></i>
    <template v-if="index_postion() == true">
      <div class="cover">
        <img class="cover-img" :src="item.frontmatter.cover || this.$themeConfig.covers[item.title%7+1]
      || 'https://pan.zealsay.com/zealsay/cover/1.jpg'" :alt="item.title"/>
      </div>
      <div class="info">
        <div class="title">
          <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
          <router-link :to="item.path">{{item.title}}</router-link>
        </div>
        <div class="abstract" v-html="item.excerpt"></div>
        <PageInfo
                :pageInfo="item"
                :currentTag="currentTag">
        </PageInfo>
      </div>
    </template>
    <template v-if="index_postion() == false">
      <div class="info">
        <div class="title">
          <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
          <router-link :to="item.path">{{item.title}}</router-link>
        </div>
        <div class="abstract" v-html="item.excerpt"></div>
        <PageInfo
                :pageInfo="item"
                :currentTag="currentTag">
        </PageInfo>
      </div>
      <div class="cover">
        <img class="cover-img" :src="item.frontmatter.cover || this.$themeConfig.covers[item.title%7+1]
      || 'https://pan.zealsay.com/zealsay/cover/1.jpg'" :alt="item.title"/>
      </div>
    </template>
  </div>
</template>

<script>
  import PageInfo from './PageInfo'

  export default {
    components: {PageInfo},
    props: ['item', 'currentPage', 'currentTag', "index_postion_num","one_flags"],
    data() {
      return {
        bj1 : require('../images/bj1.jpg'),
        bj2 : require('../images/bj2.jpg'),
        bj3 : require('../images/bj3.jpg'),
        bj4 : require('../images/bj4.jpg'),
        bj5 : require('../images/bj5.jpg'),
        bj6 : require('../images/bj6.jpg'),
        bj7 : require('../images/bj7.jpg'),
      }
    },
    methods: {
      index_postion() {
        console.log(1,this.one_flags == true && (this.index_postion_num == 0 || this.index_postion_num == 1))
        console.log(2,this.one_flags == true)
        console.log(3,this.index_postion_num == 0)
        console.log(4,this.index_postion_num == 1)
        console.log(5,(this.index_postion_num == 0 || this.index_postion_num == 1))
        const img_list = [
          this.bj1,
          this.bj2,
          this.bj3,
          this.bj4,
          this.bj5,
          this.bj6,
          this.bj7,
        ]
        if ((this.index_postion_num + 2) %2 == 0){
          this.item.frontmatter.cover = img_list[this.index_postion_num]
          return true
        }
        this.item.frontmatter.cover = img_list[this.index_postion_num]
        return false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @require '../styles/mode.styl'
  .abstract-item
    position relative
    display inline-flex
    margin: 0 auto 20px;
    padding: 16px 20px;
    width 100%
    overflow: hidden;
    border-radius: $borderRadius
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
    transition all .3s
    background-color var(--background-color)
    cursor: pointer;
    .abstract
      margin 0 1rem

    > * {
      pointer-events: auto;
    }

    .cover
      max-width 320px
      flex 1
      overflow hidden
      border-radius .5rem
    .cover-img
      border-radius .5rem
      max-width 320px
      transition: 1s ease-out;

    .cover-img:hover
      transform: scale3d(1.1, 1.1, 1);

    .info
      flex 1
      display: flex;
      flex-direction: column;
      justify-content: center;

    .reco-sticky
      position absolute
      top 0
      left 0
      display inline-block
      color $accentColor
      font-size 2.4rem

    &:hover
      box-shadow: var(--box-shadow-hover)

    .title
      position: relative;
      font-size: 1.28rem;
      line-height: 46px;
      display: inline-block;
      margin 0 2rem

      a
        color: var(--text-color);

      .reco-lock
        font-size 1.28rem
        color $accentColor

      &:after
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: $accentColor;
        visibility: hidden;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        transition: .3s ease-in-out;

      &:hover a
        color $accentColor

      &:hover:after
        visibility visible
        -webkit-transform: scaleX(1);
        transform: scaleX(1);

    .tags
      .tag-item
        &.active
          color $accentColor

        &:hover
          color $accentColor

  @media (max-width: $homePageWidth)
    .cover
      max-width 200px
      flex 1
      overflow hidden
      border-radius .5rem
      display flex
      align-items: center
      .cover-img
        border-radius .5rem
        max-width 200px
        transition: 1s ease-out;
    .info
      flex 2 !important
  @media (max-width: 1080px)
    .cover
      display none
  @media (max-width: $MQMobile)
    .tags
      display block
      margin-top 1rem;
      margin-left: 0 !important;

    .abstract-item
      display block
      text-align center

      .cover
        width 100%
        display inline-flex
        max-width 320px
        .cover-img
          max-width 320px
          width inherit

      .info
        .title
          margin 0


</style>
