import React from 'react';
import { Card, Space } from 'antd';
const DataCard = ({data}) => {
const rewardsDataLength = Object.keys(data).length
return (
<div>
{
(rewardsDataLength > 0) && <Space direction="vertical" size={16}>
         <Card  title="Customer Rewards"
           style={{
                 width: 300,
               }}
               >
         <p> April Rewards: {data.april} Points</p>
         <p> May Rewards: {data.may} Points</p>
         <p>June Rewards: {data.june} Points</p>
         </Card>
         </Space>
}
</div>

)
}

export default DataCard;