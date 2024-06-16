import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TaskMilestones from "./TaskMilestones";
import Subtask from "./Subtask";
import TaskFiles from "./TaskFiles";
import TaskComments from "./TaskComments";

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
            <TaskComments />
          </TabPanel>
          <TabPanel>
            <TaskFiles />
          </TabPanel>
          <TabPanel>
            <Subtask />
          </TabPanel>
          <TabPanel>
            <TaskMilestones />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default TaskTab;
