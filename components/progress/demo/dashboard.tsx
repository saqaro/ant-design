import React from 'react';
import { Progress, Space } from 'antd';

const App: React.FC = () => (
  <Space wrap>
    <Progress type="dashboard" percent={89} />
    <Progress type="dashboard" percent={99} gapDegree={30} />
  </Space>
);

export default App;
