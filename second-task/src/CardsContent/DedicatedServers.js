import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    tab_title:'InMotion',
    price:'99.99',
    description:'10.99',
},
{
    id:'2',
    tab_title:'HostGator',
    price:'89.98',
    description:'10.99',
},
{
    id:'3',
    tab_title:'BlueHost',
    price:'79.99',
    description:'10.99',
},
{
    id:'4',
    tab_title:'A2 Hosting',
    price:'179.99',
    description:'10.99',
},
{
    id:'5',
    tab_title:'LiquidWeb',
    price:'99.99',
    description:'10.99',
},
{
    id:'6',
    tab_title:'iPage',
    price:'119.99',
    description:'10.99',
},
{
    id:'7',
    tab_title:'DreamHost',
    price:'149.99',
    description:'10.99',
},
{
    id:'8',
    tab_title:'HostWinds',
    price:'162.00',
    description:'10.99',
}];

function DedicatedServers(){
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
export default DedicatedServers;