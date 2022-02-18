import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    tab_title:'GoDddy',
    price:'1.99',
    description:'10.99',
},
{
    id:'2',
    tab_title:'HostGator',
    price:'2.75',
    description:'10.99',
},
{
    id:'3',
    tab_title:'Hostinger.com',
    price:'2.99',
    description:'10.99',
},
{
    id:'4',
    tab_title:'Web.com',
    price:'7.95',
    description:'10.99',
},
{
    id:'5',
    tab_title:'IONOS by 1&1',
    price:'0.50',
    description:'10.99',
},
{
    id:'6',
    tab_title:'WebHostingPad',
    price:'40',
    description:'10.99',
},
{
    id:'7',
    tab_title:'Network Solutions',
    price:'3.79',
    description:'10.99',
},
{
    id:'8',
    tab_title:'HostPapa',
    price:'2.95',
    description:'10.99',
}];

function EmailHosting(){
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
export default EmailHosting;