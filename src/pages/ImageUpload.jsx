import axios from "axios";
import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export const ImageUpload = () => {
  const [form] = Form.useForm();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = (values) => {
    // console.log(values.imageUpload.file);
    let formData = new FormData();
    formData.append("caption", values.imageCaption);
    formData.append("file", values.imageUpload.file);

    console.log(formData.get("caption"));
    console.log(formData.get("file"));
    axios
      .post("http://localhost:10001/images/", formData)
      .then((response) => {
        response.data.success
          ? alert("File successfully uploaded")
          : alert("Failed to upload. File already exists.");
      })
      .catch((error) => {
        alert(error);
      });

    // axios
    //   .get("http://localhost:10001/images/")
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="image-upload">
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name="imageCaption" label="Caption">
          <Input />
        </Form.Item>
        <Form.Item name="imageUpload">
          <Upload
            className="upload-image"
            name="imageUpload"
            maxCount={1}
            beforeUpload={() => false}
          >
            <Button
              className="upload-image__button"
              type="primary"
              icon={<UploadOutlined />}
            >
              Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
