import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductListView from '../src/views/ProductList.vue'
import ProductsGateway from '../src/infra/ProductsGateway'

function sleep (time: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, time);
	});
}

it("should display an empty list of products", async () => {
  const productsGateway: ProductsGateway = {
    async getProducts() {
      return []
    },
  }
  
  const wrapper = mount(ProductListView, {
    global: {
      provide: {
        productsGateway
      }
    }
  })


  const productList = wrapper.find('[data-test="product-list"]')
  const product = wrapper.findAll('[data-test="product"]')
  expect(productList.exists()).toBe(false)
  expect(product).toHaveLength(0)
})

it("should display a list with 4 products", async () => {
  const productsGateway: ProductsGateway = {
    async getProducts() {
      return [
        { name: "HP Pavilion 15-DK1056WM"},
        { name: "Huawei P30"},
        { name: "OPPOF19"},
        { name: "Samsung Universe 9"},
      ]
    },
  }
  
  const wrapper = mount(ProductListView, {
    global: {
      provide: {
        productsGateway
      }
    }
  })

  await sleep(200);
  console.log(wrapper.html())
  const product = wrapper.findAll('[data-test="product"]')
  expect(product).toHaveLength(4)
})