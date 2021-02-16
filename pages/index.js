import getConfig from 'next/config';
import Main from '../fe/components/Main';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

const Index = ({ data }) => (
    <div>
        <Main data={data} />
    </div>
)

export async function getStaticProps() {
    var Airtable = require('airtable');
    var apiKey = serverRuntimeConfig.API_KEY;
    var base = new Airtable({ apiKey }).base('appKy6SwWCmfyQOWS');
    const table = base('Artists');
    const records = await table.select({
        fields: ['Name', 'Bio', 'Attachments'],
    }).all();
    const data = records.map((item) => {
        return {
            name: item.get('Name'),
            bio: item.get('Bio'),
            Attachments: item.get('Attachments').map((attachment) => attachment.url)
        };
    });
    return {
        props: {
            data
        },
    };
}

export default Index;