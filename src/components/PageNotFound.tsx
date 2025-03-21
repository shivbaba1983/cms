import './PageNotFound.scss';
import ExpandCollapseControl from './../components/ExpandCollapseControl';
import Attraction from './../attraction/attraction';
import CustomSlider from './CustomSlider';
const PageNotFound = () => {

    return (

        <div>
            <CustomSlider/>
            <div className='attraction-section'>
            <ExpandCollapseControl title="Attractions">
                <Attraction />
            </ExpandCollapseControl>
            </div>

        </div>
    )
}

export default PageNotFound;