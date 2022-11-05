/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const { id } = params
    const data = await fetch(`http://127.0.0.1:8000/api/v1/uavs/${id}/`, {
        headers: {
		    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NjQxMTUyLCJpYXQiOjE2Njc2NDA4NTIsImp0aSI6ImY3NTcwMmNiOGUwMDQ1NGFhMWUwNDJiMmQ1ZTg1ODEwIiwidXNlcl9pZCI6Mn0.YNFN_EBInA9x30MdorxyTIrNlyOy8k4CjEhL64qgbOQ',
        }
    }).then(res => res.json());
    return data
}