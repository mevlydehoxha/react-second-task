import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    tab_title:'1&1 IONOS',
    price:'1.00',
    description:'10.99',
},
{
    id:'2',
    tab_title:'BlueHost',
    price:'2.14',
    description:'10.99',
},
{
    id:'3',
    tab_title:'HostPapa',
    price:'1.66',
    description:'10.99',
},
{
    id:'4',
    tab_title:'GoDaddy',
    price:'1.00',
    description:'10.99',
},
{
    id:'5',
    tab_title:'Hostinger',
    price:'0.99',
    description:'10.99',
},
{
    id:'6',
    tab_title:'HostGator',
    price:'2.13',
    description:'10.99',
},
{
    id:'7',
    tab_title:'123reg',
    price:'1.00',
    description:'10.99',
},
{
    id:'8',
    tab_title:'A2 Hosting',
    price:'2.31',
    description:'10.99',
}];

function WordPressHosting(){
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
export default WordPressHosting;