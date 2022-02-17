import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    domain:'DreamHost',
    price:'2.99',
    description:'10.99',
},
{
    id:'2',
    domain:'Hostinger.com',
    price:'4.38',
    description:'10.99',
},
{
    id:'3',
    domain:'BlueHost',
    price:'2.95',
    description:'10.99',
},
{
    id:'4',
    domain:'HostGator',
    price:'2.75',
    description:'10.99',
},
{
    id:'5',
    domain:'GoDaddy',
    price:'1.99',
    description:'10.99',
},
{
    id:'6',
    domain:'IONOS by 1&1',
    price:'0.50',
    description:'10.99',
},
{
    id:'7',
    domain:'A2 Hosting',
    price:'2.99',
    description:'10.99',
},
{
    id:'8',
    domain:'HostPapa',
    price:'2.95',
    description:'10.99',
}];

function WebHosting(){
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
export default WebHosting;