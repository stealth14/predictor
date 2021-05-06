import React, { useState } from 'react'

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
  Alert,
  message
} from 'antd'

import { CarOutlined, IdcardOutlined } from '@ant-design/icons'

import styles from '@/styles/Home.module.css'

import { hasRestriction } from '@/lib/prediction'

message.config({
  duration: 4,
  maxCount: 1
})

export default function PredictorForm () {
  const [resultMessage, setMessage] = useState('')

  const onFinish = (values) => {
    const { licensePlate, date, time } = values

    // reset message cycle
    setMessage(null)

    // validates license code
    let lastDigit = licensePlate.slice(-1)
    lastDigit = parseFloat(lastDigit)

    if (typeof lastDigit !== 'number' || Number.isNaN(lastDigit)) {
      message.error('Número de placa no válido')
      return
    }

    // eslint-disable-next-line no-use-before-define
    const isRestricted = hasRestriction(lastDigit, date, time)
    setMessage(
      `El vehículo ${isRestricted ? 'no puede' : ' puede'} ${'circular'}`
    )
  }

  const onFinishFailed = () => {
    message.warning('Por favor, ingresa la información solicitada')
    setMessage(null)
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
                  message: 'Debes ingresar la placa de tu vehículo'
                }
              ]}
              name="licensePlate"
            >
              <Input
                className={styles.input}
                placeholder="Número de placa completo"
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
              <DatePicker format="dddd DD MMMM" style={{ width: '80%' }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12}>
            <Form.Item
              rules={[{ required: true, message: 'Debes seleccionar la hora' }]}
              name="time"
            >
              <TimePicker
                format="HH:mm"
                showNow={false}
                showSecond={false}
                style={{ width: '80%' }}
              />
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
            {resultMessage && <Alert message={resultMessage} type="success" />}
          </Col>
        </Row>
      </Form>
    </Space>
  )
}
