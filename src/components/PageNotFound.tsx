import './PageNotFound.scss';
import ExpandCollapseControl from './../components/ExpandCollapseControl';
import Attraction from './../attraction/attraction';
import Facility from './../facility/facility';
import CustomSlider from './CustomSlider';
import CustomMarquee from './CustomMarquee'
const PageNotFound = () => {

    return (

        <div>
            <CustomSlider/>
            {/* <CustomMarquee/> */}
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
    )
}

export default PageNotFound;