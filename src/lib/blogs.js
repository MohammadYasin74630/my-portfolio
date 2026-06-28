let promiseObj;
let apiUrl;

export function getBlogPost(query) {
    
    let newUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/blog/admin${query}`;

    if (apiUrl !== newUrl) {
        apiUrl = newUrl;
        promiseObj = fetch(newUrl).then((res) => res.json());
    }

    return promiseObj
}