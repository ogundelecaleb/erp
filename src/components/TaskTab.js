import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";


const TaskTab = () => {
  return (
    <div> 
        <Tabs>
    <TabList style={{}}>
      <Tab
        color={"#667185"}
        fontSize="14px"
        _selected={{
          borderColor: "#F05800",
          focusBorderColor: "pink.400",
          color: "#000",
        }}
      >
       Comments
      </Tab>
      <Tab
        color={"#667185"}
        fontSize="14px"
        _selected={{
          borderColor: "#F05800",
          focusBorderColor: "pink.400",
          color: "#000",
        }}
      >
   Files
      </Tab>
      <Tab
        color={"#667185"}
        fontSize="14px"
        _selected={{
          borderColor: "#F05800",
          focusBorderColor: "pink.400",
          color: "#000",
        }}
      >
    Subtask
      </Tab>
      <Tab
        color={"#667185"}
        fontSize="14px"
        _selected={{
          borderColor: "#F05800",
          focusBorderColor: "pink.400",
          color: "#000",
        }}
      >
      Milestone
      </Tab>
     
    </TabList>

    <TabPanels>
      <TabPanel>
      <p>one!</p>
      </TabPanel>
      <TabPanel>
      <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
      <TabPanel>
        <p>four!</p>
      </TabPanel>
    </TabPanels></Tabs>
    </div>
  )
}

export default TaskTab