import { render,router } from "../lib/lib"
import HomePage from "./pages/home"
import ProductPages from "./pages/product"
import './styles/style.css'



// DOM declaration
var app = document.querySelector('#app')

router.on('/', function() {
    render(HomePage, app)
})

router.on('/product/:id', function({data}) {
    render(() => ProductPages(data.id), app)
})

router.resolve()


