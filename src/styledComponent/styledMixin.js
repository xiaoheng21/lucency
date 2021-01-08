import { useStyled, props } from './index'

export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
    ...props,
  },
  data() {
    return {
      className: '',
    }
  },
  computed: {
    baseTag() {
      return this.as
    },
  },
  created() {
    const { className, update } = useStyled(this.$props)
    this.className = className

    this.$on('hook:updated', () => {
      update({ props: this.$props, className })
    })
  },
}
