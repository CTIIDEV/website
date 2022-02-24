import React from 'react';
import { DatePicker, Form, Input, TimePicker, Radio } from 'antd';
const MVAccident = () => {
  function onChange(date, dateString) {
    return dateString
  }
  return (
    <>
      <Form.Item
        name="accidentDate"
        label="Tanggal Kecelekaan"
      >
        <DatePicker onChange={onChange}/>
      </Form.Item>
      <Form.Item
        name="accidentTime"
        label="Waktu Kecelakaan"
      >
        <TimePicker format={"HH:mm"} />
      </Form.Item>
      <Form.Item
        name="accidentReportDate"
        label="Tanggal Melapor"
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="accidentLocation"
        label="Tempat Kejadian"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="accidentSpeed"
        label="Kecepatan pada saat itu"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="accidentRightLane"
        label="Apakah sedang berada pada jalur yang benar"
      >
        <Radio.Group name="radioRightLane">
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="accidentHighway"
        label="Apakah kendaraan anda berada di jalan raya"
      >
        <Radio.Group name="radioHighway">
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>

      </Form.Item>
      <Form.Item
        name="accidentExplaination"
        label="Jelaskan dengan tepat kejadiannya (jika anda beranggapan bahwa pihak lainnya yang bersalah, harap beri alasan)"
      >
        <Input.TextArea />
      </Form.Item>
    </>
  )
}

export default MVAccident;