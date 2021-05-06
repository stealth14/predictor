import React from 'react'
import 'antd/dist/antd.css'
import Form from '@/components/Form'
import { ConfigProvider } from 'antd'

import esES from 'antd/lib/locale/es_ES'

export default function Home () {
  return (
    <ConfigProvider locale={esES}>
      <Form />
    </ConfigProvider>
  )
}
