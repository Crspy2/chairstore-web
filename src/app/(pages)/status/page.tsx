import {client} from "../../../../sanity/lib/client";

type Status = {
    product: string,
    status: string,
}

export default async function Status() {
    const statuses: Status[] = await client.fetch('*[_type == "status"] | order(_createdAt asc)', {}, {
        next: {
            revalidate: 3600,
        }
    })

    return (
        <main className="dark mt-36">
            <div className="flex flex-col max-w-6xl mx-auto gap-y-12 text-white">
                {statuses.map((p, id) => (
                    <div className="flex justify-between" key={id}>
                        <h1>{p.product}</h1>
                        {p.status == "Detected" ? (
                            <h2 className="p-2 rounded-lg bg-red-500 text-black">{p.status}</h2>
                        ) : p.status == "Updating" ? (
                            <h2 className="p-2 rounded-lg bg-blue-600 text-black">{p.status}</h2>
                        ) : p.status == "Development" ? (
                            <h2 className="p-2 rounded-lg bg-purple-600 text-black">{p.status}</h2>
                        ) :p.status == "Risky" ? (
                            <h2 className="p-2 rounded-lg bg-orange-600 text-black">{p.status}</h2>
                        ) :p.status == "Undetected" ? (
                            <h2 className="p-2 rounded-lg bg-green-500 text-black">{p.status}</h2>
                        ) : <h2>{p.status}</h2>
                        }
                    </div>
                ))}
            </div>
        </main>
    );
}
