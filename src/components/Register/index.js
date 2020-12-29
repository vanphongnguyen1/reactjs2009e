import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select, Row, Col, Upload } from 'antd'
import axios from 'axios'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const Register = () => {
  const [form] = Form.useForm()
  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [district, setDistrict] = useState(null)
  const [wards, setWards] = useState([])
  const [ward, setWard] = useState(null)
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const handleRuleUserName = (rule, value) => {
    const regex = /[a-z0-9_]/
    if (regex.test(value)) {
      return Promise.resolve()
    }
    return Promise.reject(`chỉ được phép chứa các ký tự a-z, 0-9 và "_"`)
  }

  const handleLoadingProvince = () => {
    axios.get(`http://localhost:5000/provinces`)
      .then(response => {
        setProvinces(response.data)
      })
  }

  const handleLoadingDistrict = id => {
    axios.get(`http://localhost:5000/districts?provinceId=${id}`)
      .then(response => {
        setDistricts(response.data)
      })
  }

  const handleLoadingWard = id => {
    axios.get(`http://localhost:5000/wards?districtId=${id}`)
      .then(response => {
        setWards(response.data)
      })
  }

  const handleOnChangProvince = value => {
    handleLoadingDistrict(value)
    setWard(null)
    form.setFieldsValue({
      district: null,
      ward: null
    })
    setDistrict(value)
  }

  const handleOnChangDistrict = value => {
    setWard(value)
    form.setFieldsValue({
      ward: null
    })
    handleLoadingWard(value)
  }

  useEffect(() => {
    handleLoadingProvince()
  }, [])

  const onFinish = (values) => {
    console.log(values);
  };

  const beforeUpload = () => {

  }

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return;
    }

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => {
        setLoading(true)
        setImageUrl(imageUrl)
      })
      return;
    }
  }

  const submitForm = async () => {
    const payLoad = await form.getFieldsValue()
    console.log(payLoad)
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  // lưu ảnh dưới dạng chuỗi
  const customRequest = info => {
    getBase64(info.file, imageUrl => {
      setLoading(true)
      setImageUrl(imageUrl)
      console.log(imageUrl)
    })
  }

  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={6} offset={8}>
          <h1>Register</h1>
          <Form form={form} onFinish={onFinish} onSubmit={submitForm}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Trường này bắt buộc nhập'
                  },
                  { max: 10 }
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="userName"
                label="UserName"
                rules={[
                  {
                    required: true,
                    message: 'Trường này bắt buộc nhập'
                  },
                  { max: 15 },
                  {validator: handleRuleUserName}
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="province"
                label="Province"
                rules={[
                  {
                    required: true,
                    message: 'Trường này bắt buộc nhập'
                  },
                ]}
              >
                <Select onChange={handleOnChangProvince}>
                  {
                    provinces.map(province => {
                      return (
                        <Select.Option
                          key={ province.id }
                          value={ province.id }
                        >
                          { province.name }
                        </Select.Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>

              <Form.Item
                name="district"
                label="District"
                rules={[
                  {
                    required: true,
                    message: 'Trường này bắt buộc nhập'
                  },
                ]}
              >
                <Select
                  disabled={!district}
                  onChange={handleOnChangDistrict}
                >
                  {
                    districts.map(district => {
                      return (
                        <Select.Option
                          key={ district.id }
                          value={ district.id }
                        >
                          { district.name }
                        </Select.Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>

              <Form.Item
                name="ward"
                label="Ward"
                rules={[
                  {
                    required: true,
                    message: 'Trường này bắt buộc nhập'
                  },
                ]}
              >
                <Select
                  disabled={!ward}
                >
                  {
                    wards.map(ward => {
                      return (
                        <Select.Option
                          key={ ward.id }
                          value={ ward.id }
                        >
                          { ward.name }
                        </Select.Option>
                      )
                    })
                  }
                </Select>
              </Form.Item>
              <Form.Item
                name="avatar"
                label="avatar"
              >
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                  customRequest={customRequest}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
              </Form.Item>

              <Button type="primary" htmlType="button" onClick={submitForm}>
                Submit
              </Button>
            </Form>
        </Col>
      </Row>

    </>
  )
}

export default Register