import React from "react";
import { TimePicker } from "antd";
import { DatePicker } from "antd";
import { Row, Col } from "antd";

import { ConfigProvider } from "antd";
import esES from "antd/lib/locale/es_ES";

export default function Form() {
  return (
    <ConfigProvider locale={esES}>
      <Row gutter={5}>
        <Col span={12}>
          <DatePicker />
        </Col>
        <Col span={12}>
          <TimePicker />
        </Col>
      </Row>
    </ConfigProvider>
  );
}
