import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    tab_title:'.COM',
    price:'5.99',
    description:'10.99',
},
{
    id:'2',
    tab_title:'.AI',
    price:'55.99',
    description:'10.99',
},
{
    id:'3',
    tab_title:'.NET',
    price:'7.99',
    description:'10.99',
},
{
    id:'4',
    tab_title:'.HEALTH',
    price:'7.99',
    description:'10.99',
},
{
    id:'5',
    tab_title:'.CO.UK',
    price:'3.99',
    description:'10.99',
},
{
    id:'6',
    tab_title:'.ORG',
    price:'15.99',
    description:'10.99',
},
{
    id:'7',
    tab_title:'.CO',
    price:'26.33',
    description:'10.99',
},
{
    id:'8',
    tab_title:'.SEA',
    price:'26.33',
    description:'10.99',
}];

function Domains(){
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
export default Domains;