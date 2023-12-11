import ProductsGateway from "./ProductsGateway"

class ProductsGatewayHttp implements ProductsGateway {
  async getProducts(): Promise<any[]> {
    return []
  }
}

export default ProductsGatewayHttp