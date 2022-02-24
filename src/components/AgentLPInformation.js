import { Form, Select, Input } from 'antd';

const AgentLPInformation = () => {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64)
    return base64
  }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }
  return (
    <>
      <Form.Item name="infoPosition" label="Single Choice">
        <Select>
          <Select.Option value="financial_consultant">Financial Consultant</Select.Option>
          <Select.Option value="agency_director">Agency Director</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="infoPlacement" label="Penempatan Kantor">
        <Select>
          <Select.Option value="BDDB">Head Office (BDD B)</Select.Option>
          <Select.Option value="BDG">Bandung</Select.Option>
          <Select.Option value="TNG">BSD (Tangerang)</Select.Option>
          <Select.Option value="JKTKEDOYA">Kedoya</Select.Option>
          <Select.Option value="JKTKOTA">Kota (Jakarta)</Select.Option>
          <Select.Option value="MDN">Medan</Select.Option>
          <Select.Option value="SMG">Semarang</Select.Option>
          <Select.Option value="SBY">Surabaya</Select.Option>
        </Select>
      </Form.Item >
      <Form.Item name="infoPicture" label="Upload Foto">
        <Input type="file" onChange={handleUpload} />
      </Form.Item>
      <Form.Item name="infoKTP" label="Upload KTP Agen atau Penanggung Jawab">
        <Input type="file" onChange={handleUpload} />
      </Form.Item>
      <Form.Item name="infoAAUI" label="Upload AAUI">
        <Input type="file" onChange={handleUpload} />
      </Form.Item>
      <Form.Item name="infoNPWP" label="Upload NPWP Agen atau Badan Usaha">
        <Input type="file" onChange={handleUpload} />
      </Form.Item>
      <Form.Item name="infoBankBook" label="Upload Buku Tabungan">
        <Input type="file" onChange={handleUpload} />
      </Form.Item>
      <Form.Item name="infoOther" label="Upload Sertifikat Lainnya">
        <Input type="file" onChange={handleUpload} />
      </Form.Item>
    </>
  )
}

export default AgentLPInformation;