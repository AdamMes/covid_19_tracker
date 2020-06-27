import axios from 'axios';

const apiurl = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = apiurl;

    if (country) {
        changeableUrl += `/countries/${country}`;
    }


    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        const modifiedData = { confirmed, recovered, deaths, lastUpdate }
        return modifiedData;

    } catch (err) {
        console.log(err);

    }

}

export const fetchDailyData = async () => {

    try {

        const { data } = await axios.get(`${apiurl}/daily`);


        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: new Date(dailyData.reportDate).toLocaleDateString(),
        }))

        return modifiedData;
    } catch (err) {
        console.log(err);

    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${apiurl}/countries`);

        return countries.map((country) => country.name)

    } catch (err) {
        console.log(err);

    }
}