import getConfig from 'next/config';
import Main from '../fe/components/Main';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const Index = ({ data }) => (
    <div>
        <title>Aya Bochman</title>
        <Main data={data} />
    </div>
)

export async function getStaticProps() {
    var Airtable = require('airtable');
    var apiKey = serverRuntimeConfig.API_KEY;
    var base = new Airtable({ apiKey }).base('appDAc9CXCfSiBuV8');
    const table = base('Content');
    const records = await table.select({
        fields: ['Headline', 'Sub-headline', 'Header image'],
        filterByFormula: "IF({Headline}, {Sub-headline}, {Header image})"
    }).all();

    console.log(records)
    const data = records.map((item) => {

        return {
            headline: item.get('Headline'),
            subHeadline: item.get('Sub-headline'),
            image: item.get('Header image') || null
        };


    });
    return {
        props: {
            data
        },
    };
}

export default Index;