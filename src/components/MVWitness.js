import React from 'react';
import { Form, Input, Radio } from 'antd';
const MVWitness = () => {
    return (
        <>
            <Form.Item
                name="witnessName"
                label="Nama Saksi"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="witnessAddress"
                label="Alamat Saksi"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="witnessJob"
                label="Pekerjaan/Jabatan Saksi"
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="policeReport"
                label="Apakah dilaporkan kepada polisi?"
            >
                <Radio.Group name="radioPoliceReport">
                    <Radio value="yes">Yes</Radio>
                    <Radio value="no">No</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                name="policeAddress"
                label="Lokasi Kantor Polisi"
            >
                <Input />
            </Form.Item>
        </>
    )
}

export default MVWitness;