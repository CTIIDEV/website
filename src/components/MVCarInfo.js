import React from 'react';
import { Form, Input } from 'antd';
const MVCarInfo = () => {
    return (
        <>
            <Form.Item
                name="carBrand"
                label="Merk Kendaraan"
            >
                <Input type="text" />
            </Form.Item>
            <Form.Item
                name="carYear"
                label="Tahun Pembuatan"
            >
                <Input type="text" />
            </Form.Item>
            <Form.Item
                name="carPurpose"
                label="Ketika kecelakaan terjadi kendaraan sedang digunakan untuk keperluan"
            >
                <Input.TextArea type="text" />
            </Form.Item>
            <Form.Item
                name="carUsagePermission"
                label="Apakah kendaraan dikemudikan dengan sepengetahuan dan seizin tertanggung"
            >
                <Input.TextArea type="text" />
            </Form.Item>
        </>
    )
}

export default MVCarInfo;