import { Col } from 'reactstrap';
import Partner from "./Partner";
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
    const partners = selectAllPartners();
    return (
        <Col className='mt-4'>
            {partners.map((partner) => {
                return (
                <div className='mb-5 d-flex' key={partner.id}>
                    <Partner partner={partner}/>
                </div>)
            })}

        </Col>
    );
};

export default PartnersList;