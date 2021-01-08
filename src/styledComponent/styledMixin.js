import { useStyled, props } from "./index";

export default {
  props: {
    as: {
      type: String,
      default: "div"
    },
    ...props
  },
  data() {
    return {
      className: ""
    };
  },
  computed: {
    baseTag() {
      return this.as;
    }
  },
  created() {
    const { className, index, update } = useStyled(this.$props);
    this.className = className;

    this.$on("hook:updated", () => {
      update({ props: this.$props, index, className });
    });
  }
};
