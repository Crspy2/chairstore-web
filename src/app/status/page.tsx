enum E_Status {
    Detected = "Detected",
    Updating = "Updating",
    Development = "Development",
    Risky = "Risky",
    Undetected = "Undetected",
}


type I_PStatus = {
    name: string,
    status: E_Status
}

const productStatuses: I_PStatus[] = [
    {
        name: "Klar Lite",
        status: E_Status.Undetected,
    },
    {
        name: "Klar Full",
        status: E_Status.Undetected,
    },
    {
        name: "R6 Recoil Helper",
        status: E_Status.Undetected,
    },
    {
        name: "VALORANT Lite",
        status: E_Status.Undetected,
    },
    {
        name: "VALORANT Full",
        status: E_Status.Undetected,
    },
    {
        name: "HWID Spoofer",
        status: E_Status.Development,
    }
]

export default function Status() {
    return (
        <main className="dark mt-36">
            <div className="flex flex-col max-w-6xl mx-auto gap-y-12 text-white">
                {productStatuses.map((p, id) => (
                    <div className="flex justify-between" key={id}>
                        <h1>{p.name}</h1>
                        {p.status == E_Status.Detected ? (
                            <h2 className="p-2 rounded-lg bg-red-500 text-black">{p.status}</h2>
                        ) : p.status == E_Status.Updating ? (
                            <h2 className="p-2 rounded-lg bg-blue-600 text-black">{p.status}</h2>
                        ) : p.status == E_Status.Development ? (
                            <h2 className="p-2 rounded-lg bg-purple-600 text-black">{p.status}</h2>
                        ) :p.status == E_Status.Risky ? (
                            <h2 className="p-2 rounded-lg bg-orange-600 text-black">{p.status}</h2>
                        ) :p.status == E_Status.Undetected ? (
                            <h2 className="p-2 rounded-lg bg-green-500 text-black">{p.status}</h2>
                        ) : <h2>{p.status}</h2>
                        }
                    </div>
                ))}
            </div>
        </main>
    );
}
