import React, { useContext, useState } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    return (
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Добавить устройство
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.types.map(type =>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mt-3'>
                    <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {device.brands.map(brand =>
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className='mt-3'
                    placeholder='Введите название устройства'
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Введите стоимость устройства'
                    type='number'
                />
                <Form.Control
                    className='mt-3'
                    type='file'
                />
                <hr/>
                <Button
                    variant={'outline-dark'}
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {info.map(i =>
                    <Row>
                        <Col md={4}>
                            <Form.Control
                                placeholder='Введие название свойства'
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                placeholder='Введие описание свойства'
                            />
                        </Col>
                    </Row>
                )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
            <Button variant='outline-success' onClick={onHide}>Добавить</Button>
        </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;