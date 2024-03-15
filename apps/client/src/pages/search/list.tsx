import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";



export const SearchList = () => {
  const {tableProps} = useTable({
    syncWithLocation: true,
  
  })

  console.log(tableProps)


  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="firstName" title={"Name"} />
        <Table.Column dataIndex="lastName" title={"Surname"} />
        <Table.Column dataIndex="email" title={"Email"} />
        <Table.Column dataIndex="age" title={"Age"} />
        <Table.Column dataIndex="city" title={"City"} />
        <Table.Column dataIndex="country" title={"Country"} />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => {
            return (
              <Space>
                <EditButton hideText size="small" recordItemId={record.id} />
                <ShowButton hideText size="small" recordItemId={record.id} />
                <DeleteButton hideText size="small" recordItemId={record.id} />
              </Space>
            );
          }}
        />
      </Table>
    </List>
  )
}