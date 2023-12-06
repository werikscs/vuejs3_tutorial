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

export default ProductList