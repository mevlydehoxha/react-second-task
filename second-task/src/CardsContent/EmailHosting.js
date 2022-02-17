import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    domain:'GoDddy',
    price:'1.99',
    description:'10.99',
},
{
    id:'2',
    domain:'HostGator',
    price:'2.75',
    description:'10.99',
},
{
    id:'3',
    domain:'Hostinger.com',
    price:'2.99',
    description:'10.99',
},
{
    id:'4',
    domain:'Web.com',
    price:'7.95',
    description:'10.99',
},
{
    id:'5',
    domain:'IONOS by 1&1',
    price:'0.50',
    description:'10.99',
},
{
    id:'6',
    domain:'WebHostingPad',
    price:'40',
    description:'10.99',
},
{
    id:'7',
    domain:'Network Solutions',
    price:'3.79',
    description:'10.99',
},
{
    id:'8',
    domain:'HostPapa',
    price:'2.95',
    description:'10.99',
}];

function EmailHosting(){
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
export default EmailHosting;