import { useState } from "react";
import surveyStyle from "./survey.module.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Main = () => {
  const [data, setData] = useState({
    userName: "",
    userAge: "",
    userAddr: "",
    userTel: "",
    userJob: "",
    userEmail: "",
    userGender: "",
    userInter: "",
  });

  const [step, setStep] = useState(1);

  const changeInput = (e) => {
    const { value, name } = e.target;
    //내가 클릭한 input의 name이 가진 value의 값을 가져와 data에게 반환
    //하나의 함수로 모든 input의 value값을 가져올 수 있게 됨
    setData({
      //스프레드 연산자 ...data 가 없으면 값이 누적되지 않아 마지막 값만 남게 됨
      ...data,
      [name]: value,
    });
  };

  //page prev
  const onPrev = () => {
    setStep(step - 1);
  };
  //page next
  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <div className={surveyStyle.Wrapper}>
      {step === 1 && (
        <Step1 changeInput={changeInput} data={data} onNext={onNext} />
      )}
      {step === 2 && (
        <Step2
          changeInput={changeInput}
          data={data}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
      {step === 3 && (
        <Step3 data={data} onPrev={onPrev} onNext={onNext} {...data} />
      )}
      {step === 4 && <Step4 data={data} />}
    </div>
  );
};

export default Main;
