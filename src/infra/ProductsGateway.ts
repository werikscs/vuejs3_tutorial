interface ProductsGateway {
  getProducts(): Promise<any[]>
}

export default ProductsGateway;