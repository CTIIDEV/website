import React from 'react';
import { Form, Input } from 'antd';
const MVPolicyInfo = () => {
    return (
        <>
            <Form.Item
                name="policyId"
                label="No. Polis"
                required
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="policyInfo"
                label="Sebutkan pertanggungan lain yang dimiliki"
                required
            >
                <Input.TextArea />
            </Form.Item>
        </>
    )
}

export default MVPolicyInfo;