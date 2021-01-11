import { useStyled } from './styled'
import { styledProps as props } from './propsConfig'

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
      update(this.$props, className)
    })
  },
}
