import axios from 'axios';

const URL = 'https://corona.lmao.ninja/v2/countries/q?yesterday&strict&query%20';

export const fetch = async (query) => {
    const { data } = await axios.get('https://corona.lmao.ninja/v2/countries/'+query+'?yesterday&strict&query%20', {

    });

    return data;
}