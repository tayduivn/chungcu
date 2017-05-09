/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import UniversalRouter from 'universal-router'
import history from '../../../core/history'
import Link from '../../../components/Link'
import { Button, DatePicker, Icon, Row, Col, Popconfirm} from 'antd';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import moment from 'moment'
import axios from 'axios'

class ListNews extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      page: 1,
      data: []
    }
    this.getApartments()
  }
  render() {
    return (
        <div>
          <Row className="padding-5">
            <Table>
              <Thead>
              <Tr>
                <Th>Tiêu đề</Th>
                <Th>Bảng giá</Th>
                <Th>Rating</Th>
                <Th>Chỉnh sửa</Th>
              </Tr>
              </Thead>
              <Tbody>
              {this.state.data.map((el, key) => {
                return (
                  <Tr key={key}
                  >
                    <Td>{el.title.length > 53 ? (el.title.slice(0, 50) + '...') : (el.title)}</Td>
                    <Td><span>{el.price2 || el.price1 || 'Liên hệ'}</span></Td>
                    <Td>
                      <span>
                        {el.rating} ({el.numRate})
                      </span>
                    </Td>
                    <Td>
                      <span>
                        <Link to={"/admin/apartment?v=edit&slug=" + el.slug }>
                          <Button type="danger">
                          Sửa
                          </Button>
                        </Link>
                        <Popconfirm placement="right"
                                    onConfirm={() => {
                                      let that = this;
                                      axios.post('/api/apartment/delete', {slug: el.slug})
                                        .then(res => {
                                          that.getApartments()
                                          console.log('Đã xóa')
                                        })
                                        .catch(err => {
                                          message.error('Có lỗi')
                                        })
                                    }}
                                    okText="Chắc chắn xóa" cancelText="Hủy">
                        <Button
                          type="primary"
                        >Xóa</Button>
                      </Popconfirm>
                      </span>
                    </Td>
                  </Tr>
                )
              })}

              </Tbody>
            </Table>
          </Row>

        </div>
    );
  }
  async getApartments() {
    const resp = await fetch('/graphql', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: '{getApartments(type:"khu-park-hill"){category, coverUrl, slug, title, body, price1, price2, rating, numRate, created_at}}',
      }),
      credentials: 'include',
    })
    const {data} = await resp.json();
    this.setState(prev => {
      return {
        ...prev,
        loading: false,
        data: data.getApartments
      }
    })
  }
}

export default ListNews
