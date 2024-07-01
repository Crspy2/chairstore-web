import Groups from "@/components/Groups/Groups";
import {GroupInfo} from "@/lib/groups";

interface ProductResponse {
    status: number;
    data: {
        groups: GroupInfo[];
    };
    error: string;
    message: string;
}


const Products = async () => {
    const res = await fetch("https://dev.sellix.io/v1/groups", {
        headers: {
            "Authorization": `Bearer ${process.env.SELLIX_API_TOKEN}`,
            "X-Sellix-Merchant": "ChairStore"
        }
    })
    if (!res.ok) return null
    const groupData: ProductResponse = await res.json();

    return (
        <div>            
            {/* <Groups /> */}

            <Groups groups={groupData.data.groups} />
        </div>
    )
}

export default Products;