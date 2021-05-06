import React from 'react'

import {
  TimePicker,
  DatePicker,
  Row,
  Col,
  Input,
  Space,
  PageHeader
} from 'antd'

import { CarOutlined, IdcardOutlined } from '@ant-design/icons'

import styles from '@/styles/Home.module.css'

export default function Form () {
  return (
    <Space className={styles.space} direction="vertical">
      <Row gutter={5}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <PageHeader
            avatar={{
              src: <CarOutlined className={styles.car} />
            }}
            className="site-page-header"
            title="Pico y placa"
            subTitle="Checking"
            backIcon={false}
          />
        </Col>
      </Row>
      <Row gutter={5}>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Input
            style={{ width: '80%' }}
            placeholder="Número de placa"
            prefix={<IdcardOutlined />}
          />
        </Col>
      </Row>

      <Row gutter={5}>
        <Col
          style={{ marginBottom: 10 }}
          xs={24}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <DatePicker style={{ width: '80%' }} />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <TimePicker style={{ width: '80%' }} />
        </Col>
      </Row>
    </Space>
  )
}
