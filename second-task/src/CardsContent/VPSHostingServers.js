import Card from '../components/Cards/Card';
import './CardsContentStyles.css';

const card_data=[{
    id:'1',
    domain:'Hostinger',
    price:'12.99',
    description:'10.99',
},
{
    id:'2',
    domain:'Kamatera',
    price:'48.95',
    description:'10.99',
},
{
    id:'3',
    domain:'WebHostingPad',
    price:'40',
    description:'10.99',
},
{
    id:'4',
    domain:'NetworkSolutions',
    price:'12.45',
    description:'10.99',
},
{
    id:'5',
    domain:'HostPapa',
    price:'39.95',
    description:'10.99',
},
{
    id:'6',
    domain:'A2 Hosting',
    price:'40.95',
    description:'10.99',
},
{
    id:'7',
    domain:'iPage',
    price:'21.99',
    description:'10.99',
},
{
    id:'8',
    domain:'iDrive Compute',
    price:'6',
    description:'10.99',
}];

function VPSHostingServers(){
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
export default VPSHostingServers;