import { it, expect } from 'vitest'

class ProductList {
  products = []

  getProducts() {
    return this.products
  }

  addProduct(newProduct){
    this.products.push(newProduct)
  }

  getProductByName(productName){
    return this.products.find((p) => p.name === productName )
  }

  deleteProductByName(productName) {
    this.products = this.products.filter((p) => p.name !== productName)
  }

  updateProductByName(currentName, newName) {
    let currentProduct = null
    const currentProductIndex = this.products.findIndex((p) => {
      if(p.name === currentName){
        currentProduct = p
        return true
      }
    })

    this.products[currentProductIndex] = {...currentProduct, name: newName}
  }
}

it("should get a list with 0 products", () => {
  const productList = new ProductList()
  expect(productList.getProducts().length).toBe(0)
})

it("should add one product to the list", () => {
  const productList = new ProductList()
  const newProduct = {  name: "Product1" }
  productList.addProduct(newProduct)
  expect(productList.getProducts().length).toBe(1)
})

it("should get a product by name", () => {
  const productList = new ProductList()
  const newProduct1 = {  name: "Product1" }
  const newProduct2 = {  name: "Product2" }
  productList.addProduct(newProduct1)
  productList.addProduct(newProduct2)
  expect(productList.getProductByName("Product2")).toEqual(newProduct2)
  expect(productList.getProductByName("Product1")).toEqual(newProduct1)
})

it("should delete a product by name", () => {
  const productList = new ProductList()
  const newProduct1 = {  name: "Product1" }
  const newProduct2 = {  name: "Product2" }
  productList.addProduct(newProduct1)
  productList.addProduct(newProduct2)
  productList.deleteProductByName(newProduct1.name)
  expect(productList.getProductByName("Product1")).toBeUndefined()
  expect(productList.getProducts().length).toBe(1)
})

it("should update a product by name", () => {
  const productList = new ProductList()
  const newProduct1 = {  name: "Product1" }
  const newProduct2 = {  name: "Product2" }
  productList.addProduct(newProduct1)
  productList.addProduct(newProduct2)
  productList.updateProductByName("Product1", "NewProduct1")
  expect(productList.getProductByName("NewProduct1"))
    .toEqual({name: "NewProduct1"})
})