import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    tab_title:'Hostinger',
    price:'12.99',
    description:'10.99',
},
{
    id:'2',
    tab_title:'Kamatera',
    price:'48.95',
    description:'10.99',
},
{
    id:'3',
    tab_title:'WebHostingPad',
    price:'40',
    description:'10.99',
},
{
    id:'4',
    tab_title:'NetworkSolutions',
    price:'12.45',
    description:'10.99',
},
{
    id:'5',
    tab_title:'HostPapa',
    price:'39.95',
    description:'10.99',
},
{
    id:'6',
    tab_title:'A2 Hosting',
    price:'40.95',
    description:'10.99',
},
{
    id:'7',
    tab_title:'iPage',
    price:'21.99',
    description:'10.99',
},
{
    id:'8',
    tab_title:'iDrive Compute',
    price:'6',
    description:'10.99',
}];

function VPSHostingServers(){
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
export default VPSHostingServers;