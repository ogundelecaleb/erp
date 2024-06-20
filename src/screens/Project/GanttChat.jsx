import * as React from "react";
import { useEffect } from "react";
import {
  GanttComponent,
  EditDialogFieldsDirective,
  DayMarkers,
  EditDialogFieldDirective,
  Inject,
  Edit,
  Selection,
  Toolbar,
  ColumnsDirective,
  ColumnDirective,
  EventMarkersDirective,
  EventMarkerDirective,
} from "@syncfusion/ej2-react-gantt";
import { editingData, editingResources } from "../../components/Data";




const GanttChat = () => {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
    notes: "info",
    resourceInfo: "resources",
  };
  const resourceFields = {
    id: "resourceId",
    name: "resourceName",
  };
  const editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true,
  };
  const splitterSettings = {
    position: "35%",
  };
  const projectStartDate = new Date("03/25/2024");
  const projectEndDate = new Date("07/28/2024");
  const gridLines = "Both";
  const toolbar = [
    "Add",
    "Edit",
    "Update",
    "Delete",
    "Cancel",
    "ExpandAll",
    "CollapseAll",
    "Indent",
    "Outdent",
  ];
  const timelineSettings = {
    topTier: {
      unit: "Week",
      format: "MMM dd, y",
    },
    bottomTier: {
      unit: "Day",
    },
  };
  const labelSettings = {
    leftLabel: "TaskName",
    rightLabel: "resources",
  };
  const eventMarkerDay1 = new Date("4/17/2024");
  const eventMarkerDay2 = new Date("5/3/2024");
  const eventMarkerDay3 = new Date("6/7/2024");
  const eventMarkerDay4 = new Date("7/16/2024");
  return (
    <div className="">
      <div className="">
        <GanttComponent
          id="Editing"
          dataSource={editingData}
          dateFormat={"MMM dd, y"}
          treeColumnIndex={1}
          allowSelection={true}
          showColumnMenu={false}
          highlightWeekends={true}
          allowUnscheduledTasks={true}
          projectStartDate={projectStartDate}
          projectEndDate={projectEndDate}
          taskFields={taskFields}
          timelineSettings={timelineSettings}
          labelSettings={labelSettings}
          splitterSettings={splitterSettings}
          height="100%"
          width={"100%"}
          editSettings={editSettings}
          gridLines={gridLines}
          toolbar={toolbar}
          resourceFields={resourceFields}
          resources={editingResources}
        >
          <ColumnsDirective>
            <ColumnDirective field="TaskID" width="80"></ColumnDirective>
            <ColumnDirective
              field="TaskName"
              headerText="Job Name"
              width="250"
              clipMode="EllipsisWithTooltip"
            ></ColumnDirective>
            <ColumnDirective field="StartDate"></ColumnDirective>
            <ColumnDirective field="Duration"></ColumnDirective>
            <ColumnDirective field="Progress"></ColumnDirective>
            <ColumnDirective field="Predecessor"></ColumnDirective>
          </ColumnsDirective>
          <EditDialogFieldsDirective>
            <EditDialogFieldDirective
              type="General"
              headerText="General"
            ></EditDialogFieldDirective>
            <EditDialogFieldDirective type="Dependency"></EditDialogFieldDirective>
            <EditDialogFieldDirective type="Resources"></EditDialogFieldDirective>
            <EditDialogFieldDirective type="Notes"></EditDialogFieldDirective>
          </EditDialogFieldsDirective>
          <EventMarkersDirective>
            <EventMarkerDirective
              day={eventMarkerDay1}
              label="Project approval and kick-off"
            ></EventMarkerDirective>
            <EventMarkerDirective
              day={eventMarkerDay2}
              label="Foundation inspection"
            ></EventMarkerDirective>
            <EventMarkerDirective
              day={eventMarkerDay3}
              label="Site manager inspection"
            ></EventMarkerDirective>
            <EventMarkerDirective
              day={eventMarkerDay4}
              label="Property handover and sign-off"
            ></EventMarkerDirective>
          </EventMarkersDirective>
          <Inject services={[Edit, Selection, Toolbar, DayMarkers]} />
        </GanttComponent>
        
      </div>
    </div>
  );
};
export default GanttChat;
