import React from 'react'

import {
  Form,
  Button,
  TimePicker,
  DatePicker,
  Row,
  Col,
  Input,
  Space,
  PageHeader,
  Alert
} from 'antd'

import { CarOutlined, IdcardOutlined } from '@ant-design/icons'

import styles from '@/styles/Home.module.css'

export default function PredictorForm () {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Space className={styles.space} direction="vertical">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row justify="center" gutter={5}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <PageHeader
              avatar={{
                src: <CarOutlined className={styles.car} />
              }}
              className="site-page-header"
              title="Pico y placa"
              subTitle="Chequeo express"
              backIcon={false}
            />
          </Col>
        </Row>
        <Row gutter={5}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Debes ingresar la placa de tu vehiculo'
                }
              ]}
              name="licensePlate"
            >
              <Input
                className={styles.input}
                placeholder="Número de placa"
                prefix={<IdcardOutlined />}
                value
              />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="center" gutter={5}>
          <Col
            style={{ marginBottom: 10 }}
            xs={24}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Form.Item
              rules={[
                { required: true, message: 'Debes seleccionar la fecha' }
              ]}
              name="date"
            >
              <DatePicker style={{ width: '80%' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item
              rules={[{ required: true, message: 'Debes seleccionar la hora' }]}
              name="time"
            >
              <TimePicker style={{ width: '80%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center" gutter={24}>
          <Col span={24}>
            <Button type="primary" htmlType="submit">
              Comprobar
            </Button>{' '}
          </Col>
        </Row>
        <Row style={{ marginTop: 20, marginRight: 20 }}>
          <Col span={24}>
            <Alert message="Success Text" type="success" />
          </Col>
        </Row>
      </Form>
    </Space>
  )
}
