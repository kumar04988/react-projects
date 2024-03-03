 import React,{useRef} from 'react'
import { Provider } from 'react-redux'
// import DatePicker from 'react-datepicker';

// import { configure } from "@testing-library/react";
// import { prodErrorMap } from "firebase/auth";
// import { Default } from 'react-toastify/dist/utils';

const Date = () => {


  const datePickerRef = useRef(null);

  const maxEffectiveDate = new Date();
maxEffectiveDate.setDate(maxEffectiveDate.getDate() + 29);
const minEffectiveDate = new Date();
minEffectiveDate.setDate(minEffectiveDate.getDate() - 29);

    const handleCalendarClick = () => {
        datePickerRef.current.setOpen(true);
    };

    const handleOnChange = (selected) => {
        const offsetDate = new Date(selected.getTime() - (selected.getTimezoneOffset() * 60000));
        offsetDate.setHours(5, 30, 0, 0);
        // onChange(offsetDate);
    }
}

export default Date;






















































