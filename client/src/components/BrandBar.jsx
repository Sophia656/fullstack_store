import React, { useContext } from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '..';
import { Card, Container, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Container className="d-flex">
            {device.brands.map(brand =>
                <Card
                style={{cursor: 'pointer'}}
                border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                onClick={() => device.setSelectedBrand(brand)}
                key={brand.id}
                className="p-3"
                >
                    {brand.name}
                </Card>
            )}
        </Container>
    );
});

export default BrandBar;