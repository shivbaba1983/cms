import './MainLayout.scss';
import ExpandCollapseControl from '../components/ExpandCollapseControl';
import Attraction from '../attraction/attraction';
import Facility from '../facility/facility';
import CustomSlider from '../components/CustomSlider';
import CustomMarquee from '../components/CustomMarquee';
import TwoColumnLayout from './TwoColumnLayout';
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
            <CustomMarquee />
            <div className="container">

                <div className="left-column">
                    <div className='attraction-section'>
                        <ExpandCollapseControl title="Attractions">
                            <Attraction />
                        </ExpandCollapseControl>
                    </div>
                    <div className='facility-section'>
                        <ExpandCollapseControl title="Facility">
                            <Facility />
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