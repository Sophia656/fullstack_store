import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';
import Col from "react-bootstrap/Col";
import star from '../assets/star.svg'
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    return (
        <Col md={3} className="mt-3" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} />
                <div className=" mt-2" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div className="text-black-50">{device.price}</div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <div>{device.rating}</div>
                            <img width={20} height={15} src={star} />
                        </div>
                    </div>
                    <div style={{fontWeight: 'bold'}}>{device.name}</div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;