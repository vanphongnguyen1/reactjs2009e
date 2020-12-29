import React, { useEffect, useState } from 'react'
import {Form, Input, Button, Row, Col, Select, ImgCrop, Upload} from 'antd'
import {LoadingOutlined, PlusOutlined} from '@ant-design/icons'
import axios from 'axios'

const MyForm = () => {
  const [form] = Form.useForm()
  const [proviences, setProvinces] = useState([])
  const [provience, setProvince] = useState(null)
  const [districts, setDistricts] = useState([])
  const [district, setDistrict] = useState(null)
  const [wards, setWards] = useState([])
  const [imageUrl, setImageUrl] = useState('')
  const [loadingAvatar, setLoadingAvatar] = useState(false)



  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const onFinish = values => {
    console.log('values', values)
  }

  const onFill = () => {

  }

  const validateName = (rules, value) => {
    if (value.indexOf('a') !== -1) {
      return Promise.reject('Không được phép nhập chữ a')
    }
    return Promise.resolve()
  }

  const validateUserName = (rules, value) => {
    const regex = /[^a-z0-9_]/g
    const match = regex.test(value)
    if (match) {
      return Promise.reject('Không được phép xuất hiện a-z, 0-9 vs _')
    }
    return Promise.resolve()
  }

  const fetchAllProvince = () => {
    axios.get('http://localhost:5000/provinces')
      .then(response => {
        setProvinces(response.data)
      })
  }

  const fetchAllDistrictsById = id => {
    axios.get(`http://localhost:5000/districts?provinceId=${id}`)
      .then(response => {
        setDistricts(response.data)
      })
  }

  const fetchAllWardsByDistrictsById = id => {
    axios.get(`http://localhost:5000/wards?districtId=${id}`)
      .then(response => {
        setWards(response.data)
      })
  }

  useEffect (() => {
    fetchAllProvince()
  }, [])

  const setCurrentProvince = async value => {
    setProvince(value)
    setDistricts([])
    setDistrict(null)

    form.setFieldsValue({
      district: null,
      ward: null
    })
    fetchAllDistrictsById(value)
  }

  const setCurrentDistrict = value => {
    setDistrict(value)
    form.setFieldsValue({
      ward: null
    })
    fetchAllWardsByDistrictsById(value)
  }

  const befoUpload = () => {

  }

  const onChangeAvater = info => {
    if (info.file.status === 'uploading') {
      setLoadingAvatar(true)
      return
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => {
        setLoadingAvatar(true)
        setImageUrl(imageUrl)
      })
      return
    }
  }

  const uploadButton = (
    <div>
      {loadingAvatar ? <LoadingOutlined/> : <PlusOutlined />}
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  )

    const submitForm = async () => {
      const payLoad = await form.getFieldsValue()
      console.log(payLoad)
    }

    const customRequest = info => {
      getBase64(info.file, imageUrl => {
        setLoadingAvatar(false)
        setImageUrl(imageUrl)
        console.log(imageUrl)
      })
    }

  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={12} offset={6}>
        <h1>asd</h1>
          <Form form={form} name="control-hooks" onFinish={onFinish} onSubmit={submitForm}>
            <Form.Item
              name="name"
              label="name"
              rules={[
                {
                  required: true,
                  message: `Please input your name`,
                },
                { max: 12 },
                { validator: validateName}
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="userName"
              label="userName"
              rules={[
                {
                  required: true,
                  message: `Please input your name`,
                },
                { max: 12 },
                { validator: validateUserName}
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="province"
              label="province"
              rules={[
                {required: true, message: 'Hãy chọn Tỉnh'},
              ]}
            >
              <Select onChange={setCurrentProvince}>
                {
                  proviences.map(province => {
                    return (
                      <Select.Option
                        key={province.id}
                        value={province.id}
                      >
                        {province.name}
                      </Select.Option>
                    )
                  })
                }
              </Select>
            </Form.Item>

            <Form.Item
              name="district"
              label="district"
              rules={[
                {required: true, message: 'Hãy chọn Huyện'},
              ]}
            >
              <Select disabled={!provience} onChange={setCurrentDistrict}>
                {
                  districts.map(district => {
                    return (
                      <Select.Option
                        key={district.id}
                        value={district.id}
                      >
                        {district.name}
                      </Select.Option>
                    )
                  })
                }
              </Select>
            </Form.Item>

            <Form.Item
              name="ward"
              label="ward"
              rules={[
                {required: true, message: 'Hãy chọn xã'},
              ]}
            >
              <Select disabled={!district}>
                {
                  wards.map(ward => {
                    return (
                      <Select.Option
                        key={ward.id}
                        value={ward.id}
                      >
                        {ward.name}
                      </Select.Option>
                    )
                  })
                }
              </Select>
            </Form.Item>

            <Form.Item
              name="avatar"
              label="avatar"
              rules={[
                {required: true, message: 'Hãy chọn avatar'},
              ]}
            >
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https:/www.mocky.io/v2/5cc8019d300000980a055e76"
                customRequest={customRequest}
                beforeUpload={befoUpload}
                onChange={onChangeAvater}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: "100%"}}/> : uploadButton}
              </Upload>
              
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="button" onClick={onFill} onClick={submitForm}>
                Submit!
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default MyForm
