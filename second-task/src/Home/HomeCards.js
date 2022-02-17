import Card from '../components/Cards/Card';
import './HomeCards.css';
const card_data=[{
    id:'1',
    domain:'COM',
    price:'5.99',
    description:'10.99',
},
{
    id:'2',
    domain:'AI',
    price:'55.99',
    description:'10.99',
},
{
    id:'3',
    domain:'NET',
    price:'7.99',
    description:'10.99',
},
{
    id:'4',
    domain:'HEALTH',
    price:'7.99',
    description:'10.99',
},
{
    id:'5',
    domain:'CO.UK',
    price:'3.99',
    description:'10.99',
},
{
    id:'6',
    domain:'ORG',
    price:'15.99',
    description:'10.99',
},
{
    id:'7',
    domain:'CO',
    price:'26.33',
    description:'10.99',
},
{
    id:'8',
    domain:'SEA',
    price:'26.33',
    desciription:'10.99',
}];

function HomeCard(){
    return (
        <div>
            <div className="HomeCard">
                {card_data.map((data)=>
                <div key={data.id}>
                    <Card domain={data.domain} price={data.price} description={data.price}/>
                </div>
                )}
            </div>
        </div>
    );
}
export default HomeCard;