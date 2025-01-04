import { h, createApp } from 'vue'
import Toast from '../components/Toast.vue'

function renderToast(message: string, duration = 30000) {
  const dialogContainer = document.getElementById('toast')
  if (!dialogContainer) return

  const toastContainer = document.createElement('div')
  dialogContainer.appendChild(toastContainer)

  const app = createApp({
    render() {
      return h(Toast, {
        message,
        onClose: () => {
          app.unmount()
          dialogContainer.removeChild(toastContainer)
        }
      })
    }
  })

  app.mount(toastContainer)

  setTimeout(() => {
    app.unmount()
    dialogContainer.removeChild(toastContainer)
  }, duration)
}

export default renderToast
