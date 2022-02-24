import { Form } from "antd";
import MVPolicyInfo from "./MVPolicyInfo";
import MVInsuredInfo from "./MVInsuredInfo";
import MVCarInfo from "./MVCarInfo";
import MVDriverInfo from "./MVDriverInfo";
import MVAccident from "./MVAccident";
import MVWitness from "./MVWitness";
import MVThirdParty from "./MVThirdParty";
import MVDamageVehicle from "./MVDamageVehicle";
import MVDamageRemarks from "./MVDamageRemarks";
import StepPanel from "./StepPanel copy";
import axios from "axios";
import { useHistory } from "react-router-dom";

const MotorVehicleClaimForm = () => {
  const [motorVehicleForm] = Form.useForm();
  const history = useHistory();
  const onFinish = (fieldsvalue) => {
    console.log(fieldsvalue);
    // axios
    //   .post("http://localhost:3001/api/mvclaims", fieldsvalue, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     // console.log(response);
    //     // console.log("Done");
    //     history.push("/");
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
  };
  const steps = [
    {
      step: 1,
      title: "Asuransi",
      content: <MVPolicyInfo />,
    },
    {
      step: 2,
      title: "Tertanggung",
      content: <MVInsuredInfo />,
    },
    // {
    //   // step: 3,
    //   title: "Kendaraan",
    //   content: <MVCarInfo />,
    // },
    // {
    //   // step: 4,
    //   title: "Pengemudi",
    //   content: <MVDriverInfo />,
    // },
    // {
    //   // step: 5,
    //   title: "Kecelakaan",
    //   content: <MVAccident />,
    // },
    // {
    //   // step: 6,
    //   title: "Saksi-saksi",
    //   content: <MVWitness />,
    // },
    // {
    //   // step: 7,
    //   title: "Hal Ikhwal Pihak Lawan",
    //   content: <MVThirdParty />,
    // },
    // {
    //   // step: 8,
    //   title: "Kerusakan Pada Kendaraan Sendiri",
    //   content: <MVDamageVehicle />,
    // },
    // {
    //   // step: 9,
    //   title: "Catatan Kerusakan Pada Kendaraan",
    //   content: <MVDamageRemarks />,
    // },
  ];
  return (
    <Form layout="vertical" form={motorVehicleForm} onFinish={onFinish}>
      <StepPanel steps={steps} />
    </Form>
  );
};

export default MotorVehicleClaimForm;
