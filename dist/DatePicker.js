import React, { useEffect, useRef } from 'react';
import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import moment from 'moment';
const DatePicker = ({
  value,
  onChange
}) => {
  const ref = useRef(null);
  const picker = useRef(null);
  useEffect(() => {
    picker.current = new Pikaday({
      field: ref.current,
      format: 'YYYY-MM-DD',
      onSelect: function () {
        const date = this.getMoment().format('YYYY-MM-DD');
        onChange(date);
      }
    });
    return () => {
      picker.current.destroy();
    };
  }, [onChange]);
  useEffect(() => {
    if (value && picker.current) {
      const date = moment(value, 'YYYY-MM-DD').toDate();
      picker.current.setDate(date, true);
    }
  }, [value]);
  return /*#__PURE__*/React.createElement("input", {
    type: "text",
    ref: ref
  });
};
export default DatePicker;