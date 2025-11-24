/* Dynamic component that gets rendered within the page.
 * This data gets passed down to the page, passed to a child component as props
*/
export default function HotelBlock({ name, capacity }) {
    return (
        <>
            <tr>
                <td className="border border-gray-300 p-2 text-left">{name}</td>
                <td className="border border-gray-300 p-2 text-center">{capacity}</td>
            </tr>

        </>

    )
}