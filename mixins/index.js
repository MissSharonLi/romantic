const mixins = {
  computed: {
    navBarHeight() {
      return this.$store.getters.getNavBarHeight
    }
  }
}
export default mixins
