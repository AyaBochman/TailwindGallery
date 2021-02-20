import getConfig from 'next/config';
import Main from '../fe/components/Main';
const { serverRuntimeConfig } = getConfig();

const Index = ({ data }) => (
    <div>
        <title>Tailor Brands Gallery | Aya Bochman</title>
        <Main data={data} />
    </div>
)

Index.getInitialProps = async (ctx) => {
    var Airtable = require('airtable');
    var apiKey = serverRuntimeConfig.AIRTABLE_API_KEY;
    var base = new Airtable({ apiKey }).base(serverRuntimeConfig.AIRTABLE_BASE_ID);
    const table = base(serverRuntimeConfig.AIRTABLE_TABLE_NAME);
    const records = await table.select({
        fields: ['Headline', 'Sub-headline', 'Header image'],
        filterByFormula: "AND({Headline}, {Sub-headline}, {Header image})" //checking if those fields exist
    }).all();
    const data = records.map((item) => {
        return {
            headline: item.get('Headline'),
            subHeadline: item.get('Sub-headline'),
            image: item.get('Header image')
        };
    });
    return {
        data
    };
}

export default Index;