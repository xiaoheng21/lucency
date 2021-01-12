export default {
  flex: {
    type: [Boolean, String],
    custom: (val) => {
      if (typeof val === 'boolean') {
        return val ? 'display: flex;' : ''
      } else {
        return val ? `flex: ${val};` : ''
      }
    },
  },
  truncation: {
    type: Boolean,
    custom: (b) => {
      if (b) {
        return `
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        `
      }
      return ''
    },
  },
}
