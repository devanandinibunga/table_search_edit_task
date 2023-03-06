import React, { useEffect, useState } from 'react';
import './App.css';
import { Table,Input, Modal } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import { EditForm } from './components/EditForm/EditForm';
import { dummyData } from './Constants/DummyData';


function App() {


  const [tableData, setTableData] = useState([]);
  const [filteredTableData, setFilteredTableData] = useState(dummyData);
  const [input, setInput] = useState("");
  const [eachTableRow,setEachTableRow]=useState({});
  const [changeInTableData,setChangeInTableData]=useState(false);


  useEffect(() => {
    setFilteredTableData(dummyData);
    setTableData(dummyData);
  }, []);

  const setEditedValues=(values)=>{
    setChangeInTableData(true)
    values.id=eachTableRow.id;
    let newSavedData=values;
    
    setFilteredTableData((each)=>{
    return each.map((eachItem)=>{
      if(eachItem.id === eachTableRow.id){
        return newSavedData;
      }
      return eachItem;
    })})
  }
  useEffect(() => {
    setTableData(filteredTableData);
    setChangeInTableData(false)
  }, [changeInTableData]);

  // setFilteredData(filteredData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (item) => {
    setIsModalOpen(true);
    setEachTableRow(item);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFilter = (e) => {
    const searchInput = e.target.value;
    setInput(searchInput); 
    const newFilter= tableData.filter((value) => {
      return value.name.toLowerCase().includes(searchInput.toLowerCase()) ||
       value.email.toLowerCase().includes(searchInput.toLowerCase()) ||
       value.status.toLowerCase().includes(searchInput.toLowerCase()) || 
       value.lastOnline.toLowerCase().includes(searchInput.toLowerCase());
    });
    if (searchInput === "") {
      setFilteredTableData(tableData);
    } else{
      setFilteredTableData(newFilter);
    }
  };

  const columns = [
    {
      title: 'NAME',
      dataIndex: 'name',      
      width: '20%',
      
    },
    {
      title: 'EMAIL',
      dataIndex: 'email',
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
    },
    {
      title: 'LAST ONLINE',
      dataIndex: 'lastOnline',
      // defaultSortOrder: 'descend',
      // sorter: (a, b) => a.lastOnline - b.lastOnline,
    },
  ];

// const onchange=(sorter)=>{
//   console.log(sorter)
// }
  return (
    <div className='table-search-main-container'>
    <Input prefix={<SearchOutlined/>} value={input} className='search-input'  
        onChange={(e) => handleFilter(e)}/>
    <Table
      columns={columns}
      dataSource={filteredTableData}
      onRow={(item) => ({
        onClick: () => 
        {showModal(item)} })}
        pagination={{
          defaultPageSize: 5,
          showSizeChanger: true,
          pageSizeOptions: ["5","10", "15"],
        }}
        // onChange={onchange}
    />
    <Modal footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <EditForm  eachTableRow={eachTableRow} handleCancel={handleCancel} setEditedValues={setEditedValues}/>
    </Modal>
    </div>
  );
}

export default App;
