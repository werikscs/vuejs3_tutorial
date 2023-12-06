class ProductList {
  products: {name: string}[] = []

  getProducts() {
    return this.products
  }

  addProduct(newProduct: {name: string}){
    this.products.push(newProduct)
  }

  getProductByName(productName: string){
    return this.products.find((p) => p.name === productName )
  }

  deleteProductByName(productName: string) {
    this.products = this.products.filter((p) => p.name !== productName)
  }

  updateProductByName(currentName:string, newName: string) {
    let currentProduct = null
    const currentProductIndex = this.products.findIndex((p) => {
      if(p.name === currentName){
        currentProduct = p
        return true
      }
    })

    this.products[currentProductIndex] = { ...currentProduct, name: newName }
  }
}

export default ProductList