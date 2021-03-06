import {getAllProductsQuery, normalizeProduct} from "../utils"
import {ProductConnection} from "../schema"
import {Product} from "@common/types/product"
import {ApiConfig} from "@common/types/api"

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
    const { data } = await config.fetch<ReturnType>({
        query: getAllProductsQuery
    })

    return data.products.edges.map(({node: product}) =>
        normalizeProduct(product)
    ) ?? []
}

export default getAllProducts