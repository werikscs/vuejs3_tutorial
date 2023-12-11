import { createApp } from 'vue'
import router from './routes'
import ProductsGatewayHttp from './infra/ProductsGatewayHttp'
import App from './App.vue'
import './style.css'

const app = createApp(App)
const productsGateway = new ProductsGatewayHttp()

app.use(router)
app.provide('productsGateway', productsGateway)
app.mount('#app')
