export const data = JSON.parse("{\"key\":\"v-43f056c8\",\"path\":\"/group/foo.html\",\"title\":\"我是Foo\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1672835057000,\"contributors\":[{\"name\":\"rklu\",\"email\":\"17621698246@163.com\",\"commits\":1}]},\"filePathRelative\":\"group/foo.md\"}")

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
