// https://davida570.sg-host.com/graphql

interface gqlParams {
    query: string;
    variables?: object;
}

export async function wpquery({query, variables ={}}:gqlParams) {
    const res = await fetch('https://davida570.sg-host.com/graphql', {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            query,
            variables
        })
    })

    if (!res.ok) {
        console.error(res);
        return {};
    }

    const { data } = await res.json();
    return data;
}