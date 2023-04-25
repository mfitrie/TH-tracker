import type { App } from 'vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

export default (app: App) => {
  app.use(autoAnimatePlugin);
}