import { expect, it } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";
import ProductListView from "../src/views/ProductList.vue";
import ProductsGateway from "../src/infra/ProductsGateway";

it("should display an empty list of products", async () => {
  const productsGateway: ProductsGateway = {
    async getProducts() {
      return [];
    },
  };

  const wrapper = mount(ProductListView, {
    global: {
      provide: {
        productsGateway,
      },
    },
    attachTo: document.body,
  });

  const productList = wrapper.find('[data-test="product-list"]');
  const product = wrapper.findAll('[data-test="product"]');
  expect(productList.exists()).toBe(false);
  expect(product).toHaveLength(0);
});

it("should display a list with 4 products", async () => {
  const productsGateway: ProductsGateway = {
    async getProducts() {
      return [
        { name: "HP Pavilion 15-DK1056WM" },
        { name: "Huawei P30" },
        { name: "OPPOF19" },
        { name: "Samsung Universe 9" },
      ];
    },
  };

  const wrapper = mount(ProductListView, {
    global: {
      provide: {
        productsGateway,
      },
    },
    attachTo: document.body,
  });
  
  await flushPromises();
  expect(wrapper.findAll('[data-test="product"]')).toHaveLength(4);
});

it("should search a product and find it", async () => {
  const productsGateway: ProductsGateway = {
    async getProducts() {
      return [
        { name: "HP Pavilion 15-DK1056WM" },
        { name: "Huawei P30" },
        { name: "OPPOF19" },
      ];
    },
  };

  const wrapper = mount(ProductListView, {
    global: {
      provide: {
        productsGateway,
      },
    },
    attachTo: document.body,
  });

  await wrapper.find('[data-test="search-input"]').setValue("OPPOF19");
  await wrapper.find('[data-test="search-button"]').trigger("click");
  expect(wrapper.findAll('[data-test="product"]')).toHaveLength(1);
});
