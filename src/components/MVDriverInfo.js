import React from 'react';
import { Form, Input } from 'antd';
const MVDriverInfo = () => {
    return (
        <>
            <Form.Item
                name="driverName"
                label="Nama Pengemudi"
            >
                <Input type="text" />
            </Form.Item>
            <Form.Item
                name="driverAge"
                label="Umur Pengemudi"
            >
                <Input type="text" />
            </Form.Item>
            <Form.Item
                name="driverAddress"
                label="Alamat Pengemudi"
            >
                <Input.TextArea type="text" />
            </Form.Item>
            <Form.Item
                name="driverSIM"
                label="No. SIM Pengemudi"
            >
                <Input type="text" />
            </Form.Item>
            <Form.Item
                name="driverSIMHistory"
                label="Apakah SIM tersebut pernah ditahan? jika pernah sebutkan sebab-sebabnya"
            >
                <Input.TextArea type="text" />
            </Form.Item>
        </>
    )
}

export default MVDriverInfo;