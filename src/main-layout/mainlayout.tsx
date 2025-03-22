import './MainLayout.scss';
import ComplexHeader from './../header/ComplexHeader';
import ExpandCollapseControl from '../components/ExpandCollapseControl';
import Attraction from '../attraction/attraction';
import Facility from '../facility/facility';
import CustomSlider from '../components/CustomSlider';
import CustomMarquee from '../components/CustomMarquee';
import TwoColumnLayout from './TwoColumnLayout';
import ContactInfo from './../contact-us/ContactInfo';
import LeafletMap from './../leafletmap/LeafletMap';
const MainLayout = () => {

    return (

        <div className='application-level'>
            {/* <CustomSlider /> */}
            {/* <CustomMarquee/> */}
            {/* <div className='attraction-section'>
                <ExpandCollapseControl title="Attractions">
                    <Attraction />
                </ExpandCollapseControl>
            </div>

            <div className='facility-section'>
                <ExpandCollapseControl title="Facility">
                    <Facility />
                </ExpandCollapseControl>
            </div> */}
            <ComplexHeader></ComplexHeader>
            <CustomMarquee />
            <div className="container">

                <div className="left-column">
                <div className='facility-section'>
                        <ExpandCollapseControl title="Facility">
                            <Facility />
                        </ExpandCollapseControl>
                    </div>
                    <div className='attraction-section'>
                        <ExpandCollapseControl title="Attractions">
                            <Attraction />
                        </ExpandCollapseControl>
                    </div>

                    <div className='contact-info-section'>
                        <ExpandCollapseControl title="Contact Us">
                            <ContactInfo />
                        </ExpandCollapseControl>
                    </div>
                    <div className='location-info-section'>
                        <ExpandCollapseControl title="Location">
                            <LeafletMap />
                        </ExpandCollapseControl>
                    </div>
                </div>
                <div className="right-column">
                    <CustomSlider />
                </div>
            </div>
        </div>
    )
}

export default MainLayout;