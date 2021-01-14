import { useStyled } from './styled'
import { styledProps as props } from './propsConfig'

export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
    static: {
      type: Boolean,
      default: false
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
    const { className, update, remove } = useStyled(this.$props)
    this.className = className
    
    if (!this.static) {
      this.$on('hook:updated', () => {
        update(this.$props, className)
      })
    }
    
    this.$on('hook:beforeDestroy', () => {
      remove(className)
    })
  },
}
