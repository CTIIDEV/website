import React from 'react';
import { Form, Input } from 'antd';
const MVInsuredInfo = () => {
    return (
        <>
            <Form.Item
                name="insuredName"
                label="Nama Tertanggung"
            >
                <Input type="text" />
            </Form.Item>
            <Form.Item
                name="insuredAddress"
                label="Alamat Tertanggung"
            >
                <Input type="text" />
            </Form.Item>
            <Form.Item
                name="insuredPhoneNum"
                label="No. Telepon Rumah/Kantor"
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                name="insuredMobileNum"
                label="No. Telepon Genggam"
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item
                name="insuredEmail"
                label="Email"
            >
                <Input type="email" />
            </Form.Item>
        </>
    )
}

export default MVInsuredInfo;