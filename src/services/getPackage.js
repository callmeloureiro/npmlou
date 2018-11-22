const ENDPOINT = 'https://api.npms.io/v2/search?q=';

const getPackage = search => fetch(ENDPOINT + search).then(data => data.json());

export default getPackage;
