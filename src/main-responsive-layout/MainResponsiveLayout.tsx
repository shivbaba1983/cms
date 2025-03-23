
import "./MainResponsiveLayout.scss"
import ComplexHeader from '../header/ComplexHeader';
import ExpandCollapseControl from '../components/ExpandCollapseControl';
import Attraction from '../attraction/attraction';
import Facility from '../facility/facility';
import CustomSlider from '../components/CustomSlider';
import CustomMarquee from '../components/CustomMarquee';
import ContactInfo from '../contact-us/ContactInfo';
import LeafletMap from '../leafletmap/LeafletMap';

const MainResponsiveLayout = () => {
  return (
    <div className="application-level">
              <ComplexHeader/>
              <CustomMarquee />
      <div className="main-container">
      <div className="right-section">
          <CustomSlider />
        </div>
        <div className="left-section">
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

      </div>
    </div>
  );
};

export default MainResponsiveLayout;