import logo from './logo.svg';
import './App.css';
import {Select} from 'antd';
import apis from './api/index'
import {useEffect, useState} from "react";
import DataCard from './datacard';

function App() {
  const [customers, setCustomers] = useState([])
  const [rewards, setRewards] = useState({});
  useEffect(() => {
    const exec = async() => {
      setCustomers(await apis.getCustomers())
    }
    exec()
  }, [])
  const handleChange = async(value) => {
    const rewards = await apis.getCustomerRewards(value);
    setRewards(rewards)
  }
  return (

    <div className="App">
      <h4> Please select customer name</h4>
      <br/>
      Select Customer: &nbsp;
      <Select
        defaultValue=""
        style={{width: 120}}
        onChange={handleChange}
        options={customers.map(e => {
          return {
            value: e.customerId,
            label: e.customerName
          }
        })}
      />
      <br/>
      <br/>
      <br/>
      <DataCard data={rewards}/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
