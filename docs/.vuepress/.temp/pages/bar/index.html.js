export const data = JSON.parse("{\"key\":\"v-7444d4f5\",\"path\":\"/bar/\",\"title\":\"bar\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1672835057000,\"contributors\":[{\"name\":\"rklu\",\"email\":\"17621698246@163.com\",\"commits\":1}]},\"filePathRelative\":\"bar/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
