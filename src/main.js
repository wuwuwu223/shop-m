import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
import addVant from './plugins/vant'
import { AddressList, Icon, Swipe, Button } from "@nutui/nutui";


const app = createApp(App)
app.use(AddressList);
app.use(Icon);
app.use(Swipe);
app.use(Button);
app.use(router)
app.use(createPinia())
app.use(VueAxios,axios)
addVant(app)


app.mount('#app')
