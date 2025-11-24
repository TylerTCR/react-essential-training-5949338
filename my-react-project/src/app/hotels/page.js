// "use client";
import HotelBlock from "./HotelBlock";

async function getData() {
    const res = await fetch(
        "https://snowtooth-hotel-api.fly.dev"
    );
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return (
        <main>
            <div>
                <h1 className="text-2xl font-bold text-center m-6">Hotel Details</h1>
                <h3 className="text-large font-bold text-center m-6">Fetching hotel's name and capacity from an APIon the
                    server-side</h3>
                <div className="flex justify-center-safe">
                    <table>
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-12 py-2">Hotel Name</th>
                                <th className="border border-gray-300 px-12 py-2">Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((hotel) => (
                                <HotelBlock key={hotel.id} name={hotel.name} capacity={hotel.capacity} />
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </main>
    );
}