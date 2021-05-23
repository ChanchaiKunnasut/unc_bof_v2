import moment from 'moment'
import translate from '../../i18n/translate.json'
import { faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormOutlined, EyeFilled } from '@ant-design/icons'
import { permissionCheck, pathVisible } from '../../Services/Permissions'
import {
  Button,
  // Col,
  // Row,
  // Alert,
  // Input,
  // Menu,
  // DatePicker,
  // Dropdown,
  // Badge,
  // Tabs,
  // Select,
  // Typography,
} from 'antd'

export const columns = [
  {
    title: 'Order ID',
    dataIndex: 'orderId',
    key: 'orderId',
    sorter: true,
    sortDirections: ['descend', 'ascend'],
    defaultSortOrder: 'descend',
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    sorter: true,
    sortDirections: ['descend', 'ascend'],
    render: (date) => (
      <div>{moment(new Date(date)).format('DD-MM-YYYY HH:mm:ss')}</div>
    ),
  },
  {
    title: 'ผู้ซื้อ',
    sorter: true,
    dataIndex: 'user',
    sortDirections: ['descend', 'ascend'],
    render: (text, record) => (
      <div>
        {record.user?.firstName_th} {record.user?.lastName_th}
      </div>
    ),
  },
  {
    title: 'ประเภท',
    sorter: true,
    dataIndex: 'type',
    sortDirections: ['descend', 'ascend'],
    render: (text, record) => {
      return <div>{translate[record.type]?.th}</div>
    },
  },
  {
    title: 'ผู้ดูแล',
    sorter: true,
    dataIndex: 'admin',
    sortDirections: ['descend', 'ascend'],
    render: (text, record) => <div>{record.admin?.username}</div>,
  },
  {
    title: 'ยอดขาย',
    dataIndex: 'amount',
    key: 'amount',
    sorter: true,
    sortDirections: ['descend', 'ascend'],
    render: (text, record) => {
      if (record.adminTotalAmount || record.adminTotalAmount === 0) {
        return (
          <div>
            <FontAwesomeIcon icon={faUsersCog} color='#40a9ff' />
            {'   '}
            {record.adminTotalAmount}
          </div>
        )
      }
      return record.amount
    },
  },
  {
    title: 'สถานะ',
    key: 'status',
    dataIndex: 'status',
    sorter: true,
    sortDirections: ['descend', 'ascend'],
    render: (text, record) => {
      let color = ''
      switch (record.status) {
        case 'WaitForPaid':
          color = '#108EE9'
          break
        case 'WaitForApprove':
          color = '#FFAD31'
          break
        case 'WaitForPrepare':
          color = '#FA7312'
          break
        case 'WaitForApproveAdminPrice':
          color = '#FA7312'
          break
        case 'Prepare':
          color = '#E157D3'
          break
        case 'Delivered':
          color = '#3DBD7D'
          break
        default:
          color = '#F52400'
      }
      return (
        <Button
          type='primary'
          shape='round'
          disabled
          style={{
            background: color,
            borderColor: color,
            color: '#fff',
            cursor: 'initial',
            fontWeight: 'bold',
          }}
        >
          {translate[record.status]?.th}
        </Button>
      )
    },
    // sorter: true,
    // sortDirections: ['descend', 'ascend'],
  },
  {
    key: 'setting',
    render: (text, record) => {
      let props = {}
      switch (record.status) {
        case 'WaitForPaid':
          props = {
            label: 'แก้ไข',
            icon: <FormOutlined />,
            method: 'EDIT',
          }
          break
        case 'WaitForApprove':
          props = {
            label: 'แก้ไข',
            icon: <FormOutlined />,
            method: 'EDIT',
          }
          break
        case 'WaitForApproveAdminPrice':
          props = {
            label: 'แก้ไข',
            icon: <FormOutlined />,
            method: 'EDIT',
          }
          break
        case 'WaitForPrepare':
          props = {
            label: 'รายละเอียด',
            icon: <EyeFilled />,
            method: 'VIEW',
          }
          break
        case 'Prepare':
          props = {
            label: 'รายละเอียด',
            icon: <EyeFilled />,
            method: 'VIEW',
          }
          break
        case 'Delivered':
          props = {
            label: 'รายละเอียด',
            icon: <EyeFilled />,
            method: 'VIEW',
          }
          break
        default:
          props = {
            label: 'รายละเอียด',
            icon: <EyeFilled />,
            method: 'VIEW',
          }
      }
      // return permission.viewDetail ? (
        <Button
          type='primary'
          ghost
          icon={props.icon}
          onClick={() => {
            // handleButton(props.method, record)
          }}
        >
          {props.label}
        </Button>
      // ) : (
      //   ''
      // )
    },
  },
]
