import { Form, Input } from 'antd';
const MVDamageRemarks = () => {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    // console.log(base64)
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
      <Form.Item
        name="remarksDetail"
        label="Catatan Kerusakan Pada Kendaran"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="remarksImage"
        label="Upload Foto Kondisi Kendaraan"
      >
        <Input type="file" onChange={handleUpload} />
      </Form.Item>
    </>
  )
}

export default MVDamageRemarks;