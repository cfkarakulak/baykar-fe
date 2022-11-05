
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { id } = params
    const data = await fetch(`http://127.0.0.1:8000/api/v1/uavs/${id}/`, {
        headers: {
            Authorization: `Bearer`,
        }
    }).then(res => res.json());
    return data
}