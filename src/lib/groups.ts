export interface GroupInfo {
    uniqid: string;
    title: string,
    description: string,
    cloudflare_image_id: string
    products_bound: Array<{
        price_display: number
    }>
}