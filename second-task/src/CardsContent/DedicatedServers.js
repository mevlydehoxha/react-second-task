import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    domain:'InMotion',
    price:'99.99',
    description:'10.99',
},
{
    id:'2',
    domain:'HostGator',
    price:'89.98',
    description:'10.99',
},
{
    id:'3',
    domain:'BlueHost',
    price:'79.99',
    description:'10.99',
},
{
    id:'4',
    domain:'A2 Hosting',
    price:'179.99',
    description:'10.99',
},
{
    id:'5',
    domain:'LiquidWeb',
    price:'99.99',
    description:'10.99',
},
{
    id:'6',
    domain:'iPage',
    price:'119.99',
    description:'10.99',
},
{
    id:'7',
    domain:'DreamHost',
    price:'149.99',
    description:'10.99',
},
{
    id:'8',
    domain:'HostWinds',
    price:'162.00',
    description:'10.99',
}];

function DedicatedServers(){
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
export default DedicatedServers;