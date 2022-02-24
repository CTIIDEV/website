import React from 'react';
import { Form, Input } from 'antd';
const MVThirdParty = () => {
    return (
        <>
            <Form.Item
                name="tpInformation"
                label="Sebutkan nama dan alamat dari pemilik/pengemudi dari kendaraan bertabrakan dan No. polisinya"
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                name="tpDamage"
                label="Apakah ada luka-luka atau kerusakan yang diderita? Jika ada harap diberi keterangan lengkap juga nama dan alamat"
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                name="tpClaim"
                label="Apakah pihak lainnya menuntut rugi kepada anda? Jika demikian berapa jumlahnya"
            >
                <Input />
            </Form.Item>
        </>
    )
}

export default MVThirdParty;