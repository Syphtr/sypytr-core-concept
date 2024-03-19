import {
  DeleteButton,
  EditButton,
  List,
  SaveButton,
  ShowButton,
  useTable,
} from "@refinedev/antd";

import CardView from "./components/card-view";
import { BaseRecord, getDefaultFilter } from "@refinedev/core";
import { Space, Table, Form, Input, Grid, Spin } from "antd";

import debounce from "lodash/debounce";

export const SearchList = () => {
  const { tableProps, searchFormProps, tableQueryResult, filters } = useTable({
    syncWithLocation: true,
    onSearch: (values: any) => {
      console.log(values);
      return [
        {
          field: "city",
          operator: "contains",
          value: values.city,
        },
      ];
    },
    // pagination: {
    //   pageSize: 32,
    // },
    // filters: {
    //   initial: [
    //     {
    //       field: "id",
    //       operator: "contains",
    //       value: undefined,
    //     },
    //   ],
    // },
    sorters: {
      initial: [{ field: "id", order: "desc" }],
    },
  });

  console.log({ searchFormProps, tableProps, tableQueryResult });

  const screens = Grid.useBreakpoint();

  // const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   searchFormProps?.onFinish?.({
  //     id: e.target.value ?? "",
  //   });
  // };

  // const debouncedOnChange = debounce(onSearch, 500);

  return (
    <List
      headerButtons={() => {
        return (
          <Space
            style={{
              marginTop: screens.xs ? "1.6rem" : undefined,
            }}
          >
            <Form {...searchFormProps} layout="inline">
              <Form.Item name="city" noStyle>
                <Input
                  size="large"
                  // prefix={<SearchOutlined className="anticon tertiary" />}
                  suffix={
                    <Spin size="small" spinning={tableQueryResult.isFetching} />
                  }
                  placeholder="Search by city"
                  // onChange={debouncedOnChange}
                />
              </Form.Item>
              <SaveButton onClick={searchFormProps.form?.submit} />
            </Form>
          </Space>
        );
      }}
    >
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="first_name" title={"Name"} />
        <Table.Column dataIndex="last_name" title={"Surname"} />
        <Table.Column dataIndex="occupation" title={"Occupation"} />
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
      {/* <CardView tableProps={tableProps} /> */}
    </List>
  );
};
