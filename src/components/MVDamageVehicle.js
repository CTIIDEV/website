import React from 'react';
import { DatePicker, Form, Input, Select } from 'antd';

const MVDamageVehicle = () => {
    const { Option } = Select;
    return (
        <>
            <Form.Item
                name="dmgAssessment"
                label="Sebutkan besarnya kerusakan kendaraan anda (menurut penilaian anda)"
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                name="dmgAppointment"
                label="Kapan kendaraan anda dapat kami periksa"
            >
                <DatePicker />
            </Form.Item>
            <Form.Item
                name="dmgWorkshop"
                label="Sebutkan besarnya kerusakan kendaraan anda (menurut penilaian anda)"
            >
                <Select>
                    <Option value="workshop1">Workshop 1</Option>
                    <Option value="workshop2">Workshop 2</Option>
                    <Option value="workshop3">Workshop 3</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="dmgEstimation"
                label="Perkiraan Biaya Perbaikan"
            >
                <Input />
            </Form.Item>
        </>
    )
}

export default MVDamageVehicle;