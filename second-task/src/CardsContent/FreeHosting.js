import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    tab_title:'InfinityFree',
    price:'0',
    description:'0',
},
{
    id:'2',
    tab_title:'Wix',
    price:'0',
    description:'0',
},
{
    id:'3',
    tab_title:'000WebHost',
    price:'0',
    description:'0',
},
{
    id:'4',
    tab_title:'Google Cloud Hosting',
    price:'0',
    description:'0',
},
{
    id:'5',
    tab_title:'AwardSpace',
    price:'0',
    description:'0',
},
{
    id:'6',
    tab_title:'Freehostia',
    price:'0',
    description:'0',
},
{
    id:'7',
    tab_title:'FreeHosting',
    price:'0',
    description:'0',
},
{
    id:'8',
    tab_title:'ByetHost',
    price:'0',
    description:'0',
}];

function FreeHosting(){
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
export default FreeHosting;