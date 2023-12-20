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
  const product = wrapper.findAll('[data-test="product-list-item"]');
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
  const productList = wrapper.findAll('[data-test="product-list-item"]');
  expect(productList).toHaveLength(4);
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

  const searchInput = wrapper.find('[data-test="search-input"]');
  const searchButton = wrapper.find('[data-test="search-button"]');
  await searchInput.setValue("OPPOF19");
  await searchButton.trigger("click");
  const productList = wrapper.findAll('[data-test="product-list-item"]');
  expect(productList).toHaveLength(1);
});

it("should display a message when no product is found", async () => {
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

  const searchInput = wrapper.find('[data-test="search-input"]');
  const searchButton = wrapper.find('[data-test="search-button"]');
  await searchInput.setValue("Samsung Universe 9");
  await searchButton.trigger("click");
  const productList = wrapper.findAll('[data-test="product-list-item"]');
  const productNotFound = wrapper.find('[data-test="product-not-found"]');
  const emptyList = wrapper.find('[data-test="empty-list"]');
  expect(productList).toHaveLength(0);
  expect(productNotFound.exists()).toBe(true);
  expect(emptyList.exists()).toBe(false);
});

it("should display a message if the list of products is empty", async () => {
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

  const productList = wrapper.findAll('[data-test="product-list-item"]');
  const productNotFound = wrapper.find('[data-test="product-not-found"]');
  const emptyList = wrapper.find('[data-test="empty-list"]');
  expect(productList).toHaveLength(0);
  expect(emptyList.exists()).toBe(true);
  expect(productNotFound.exists()).toBe(false);
});

it("should display the full list of products when the search is empty", async () => {
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

  const searchInput = wrapper.find('[data-test="search-input"]');
  const searchButton = wrapper.find('[data-test="search-button"]');
  await searchInput.setValue("");
  await searchButton.trigger("click");
  const productList = wrapper.findAll('[data-test="product-list-item"]');
  expect(productList).toHaveLength(3);
});

it("should display the full list of products when the search is empty and the products showing is the result of a search", async () => {
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

  const searchInput = wrapper.find('[data-test="search-input"]');
  const searchButton = wrapper.find('[data-test="search-button"]');
  await searchInput.setValue("OPPOF19");
  await searchButton.trigger("click");
  const productList = wrapper.findAll('[data-test="product-list-item"]');
  expect(productList).toHaveLength(1);
  await searchInput.setValue("");
  await searchButton.trigger("click");
  const newProductList = wrapper.findAll('[data-test="product-list-item"]');
  expect(newProductList).toHaveLength(3);
});

it("should clear the search input when the search button is clicked", async () => {
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

  const searchInput = wrapper.find('[data-test="search-input"]');
  const searchButton = wrapper.find('[data-test="search-button"]');
  await searchInput.setValue("OPPOF19");
  await searchButton.trigger("click");
  expect((searchInput.element as HTMLInputElement).value).toBe("");
});

it("should disable search button if list is empty", async () => {
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
  const searchButton = wrapper.find('[data-test="search-button"]');
  expect((searchButton.element as HTMLButtonElement).disabled).toBe(true);
});
