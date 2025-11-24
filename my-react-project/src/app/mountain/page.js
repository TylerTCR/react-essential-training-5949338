async function getData() {
    const res = await fetch("https://snowtooth-api-rest.fly.dev");
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return (
        <main>
            <h1 className="text-2xl font-bold text-center m-6">Lift Status Info</h1>
            <p className="text-medium text-center">This page simply fetches data from a REST API and displays the results in a table
                using props, which allows it to be mapped onto the table.
            </p>
            <br />
            <div className="flex justify-center-safe">
                <table className="border-separate border-spacing-1 border-gray-400">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-12 py-2">Lift Name</th>
                            <th className="border border-gray-300 px-8 py-2">Current Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((lift) => (
                            <tr key={lift.id}>
                                <td className="border border-gray-300 p-2 text-left">{lift.name}</td>
                                <td className="border border-gray-300 p-2 text-center">{lift.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}