import Pluralsight from './Images/Pluralsight.png';
import Sharepoint from './Images/Sharepoint.png';
import Resonate from './Images/Resonate.png';
import './ChannelContent.css'

export default function ChannelContent() {
    return (
        <div className="channel-container">
            <div className='channel'>
                <img src={Pluralsight} alt="Pluralsight"></img>
                <h2>Pluralsight</h2>
            </div>
            <div className='channel'>
                <img src={Sharepoint} alt="Sharepoint"></img>
                <h2>Sharepoint</h2>
            </div>
            <div className='channel'>
                <img src={Resonate} alt="Resonate"></img>
                <h2>Resonate</h2>
            </div>
        </div>
    )
}