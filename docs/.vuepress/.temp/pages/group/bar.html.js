export const data = JSON.parse("{\"key\":\"v-5f0a6d6f\",\"path\":\"/group/bar.html\",\"title\":\"Bar\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1672835057000,\"contributors\":[{\"name\":\"rklu\",\"email\":\"17621698246@163.com\",\"commits\":1}]},\"filePathRelative\":\"group/bar.md\"}")

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
