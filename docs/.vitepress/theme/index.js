import DefaultTheme from 'vitepress/theme'
import 'element-plus/lib/theme-chalk/index.css'
import ElementUI from 'element-plus'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementUI)
  }
}
