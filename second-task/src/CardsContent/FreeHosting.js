import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    domain:'InfinityFree',
    price:'0',
    description:'0',
},
{
    id:'2',
    domain:'Wix',
    price:'0',
    description:'0',
},
{
    id:'3',
    domain:'000WebHost',
    price:'0',
    description:'0',
},
{
    id:'4',
    domain:'Google Cloud Hosting',
    price:'0',
    description:'0',
},
{
    id:'5',
    domain:'AwardSpace',
    price:'0',
    description:'0',
},
{
    id:'6',
    domain:'Freehostia',
    price:'0',
    description:'0',
},
{
    id:'7',
    domain:'FreeHosting',
    price:'0',
    description:'0',
},
{
    id:'8',
    domain:'ByetHost',
    price:'0',
    description:'0',
}];

function FreeHosting(){
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
export default FreeHosting;