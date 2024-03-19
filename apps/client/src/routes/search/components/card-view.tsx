import { useMemo } from "react";
import { List, TableProps } from "antd"

type CardViewProps = {
tableProps: TableProps
}

export default function CardView({tableProps}: CardViewProps) {
    const {dataSource} = tableProps

    const data = useMemo(() => {
        return [...(dataSource || [])];
      }, [dataSource]);
  return (
    <List 
    grid={{
        gutter: 32,
        column: 4,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 2,
        xl: 4,
      }    
    }
    dataSource={dataSource}
    renderItem={(item) => {
        return (
          <List.Item>
            <List.Item.Meta
              title={item.first_name}
              description={item.last_name}
            />
          </List.Item>
        )
    }}
    >card-view</List>
  )
}