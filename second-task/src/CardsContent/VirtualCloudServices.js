import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    tab_title:'Amazon Web Services',
    price:'99.99',
    description:'10.99',
},
{
    id:'2',
    tab_title:'Microsoft Azure',
    price:'89.98',
    description:'10.99',
},
{
    id:'3',
    tab_title:'Google Cloud',
    price:'79.99',
    description:'10.99',
},
{
    id:'4',
    tab_title:'Alibaba Cloud',
    price:'179.99',
    description:'10.99',
},
{
    id:'5',
    tab_title:'IBM Cloud',
    price:'99.99',
    description:'10.99',
},
{
    id:'6',
    tab_title:'IBM Cloud',
    price:'119.99',
    description:'10.99',
},
{
    id:'7',
    tab_title:'Oracle',
    price:'149.99',
    description:'10.99',
},
{
    id:'8',
    tab_title:'Salesforce',
    price:'162.00',
    description:'10.99',
}];

function VirtualCloudServices(){
    return (
        <div>
            <div className="HomeCard">
                {card_data.map((data)=>
                <div key={data.id}>
                    <Card tab_title={data.tab_title} price={data.price} description={data.description}/>
                </div>
                )}
            </div>
        </div>
    );
}
export default VirtualCloudServices;