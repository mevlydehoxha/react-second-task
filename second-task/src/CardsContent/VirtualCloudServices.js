import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    domain:'Amazon Web Services',
    price:'99.99',
    description:'10.99',
},
{
    id:'2',
    domain:'Microsoft Azure',
    price:'89.98',
    description:'10.99',
},
{
    id:'3',
    domain:'Google Cloud',
    price:'79.99',
    description:'10.99',
},
{
    id:'4',
    domain:'Alibaba Cloud',
    price:'179.99',
    description:'10.99',
},
{
    id:'5',
    domain:'IBM Cloud',
    price:'99.99',
    description:'10.99',
},
{
    id:'6',
    domain:'IBM Cloud',
    price:'119.99',
    description:'10.99',
},
{
    id:'7',
    domain:'Oracle',
    price:'149.99',
    description:'10.99',
},
{
    id:'8',
    domain:'Salesforce',
    price:'162.00',
    description:'10.99',
}];

function VirtualCloudServices(){
    return (
        <div>
            <div className="HomeCard">
                {card_data.map((data)=>
                <div key={data.id}>
                    <Card domain={data.domain} price={data.price} description={data.description}/>
                </div>
                )}
            </div>
        </div>
    );
}
export default VirtualCloudServices;