import ProductsGateway from "./ProductsGateway"

class ProductsGatewayHttp implements ProductsGateway {
  async getProducts(): Promise<any[]> {
    return [
      { name: "HP Pavilion 15-DK1056WM" },
      { name: "Samsung Universe 9" },
      { name: "OPPOF19" },
    ]
  }
}

export default ProductsGatewayHttp