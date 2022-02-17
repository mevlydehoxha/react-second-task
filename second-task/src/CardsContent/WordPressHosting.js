import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    domain:'1&1 IONOS',
    price:'1.00',
    description:'10.99',
},
{
    id:'2',
    domain:'BlueHost',
    price:'2.14',
    description:'10.99',
},
{
    id:'3',
    domain:'HostPapa',
    price:'1.66',
    description:'10.99',
},
{
    id:'4',
    domain:'GoDaddy',
    price:'1.00',
    description:'10.99',
},
{
    id:'5',
    domain:'Hostinger',
    price:'0.99',
    description:'10.99',
},
{
    id:'6',
    domain:'HostGator',
    price:'2.13',
    description:'10.99',
},
{
    id:'7',
    domain:'123reg',
    price:'1.00',
    description:'10.99',
},
{
    id:'8',
    domain:'A2 Hosting',
    price:'2.31',
    description:'10.99',
}];

function WordPressHosting(){
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
export default WordPressHosting;