import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
// import "./index.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getStudySaga } from "../sagas/studySaga";

const columns = [
  {
    title: "Study Name",
    dataIndex: "studyName",
    sorter: {
      compare: (a, b) => a.studyName - b.studyName,
      multiple: 2
    }
  },
  {
    title: "Study Start Date",
    dataIndex: "studyStartDate",
    sorter: {
      compare: (a, b) => a.studyStartDate - b.studyStartDate,
      multiple: 3
    }
  },
  {
    title: "Study Completion Date",
    dataIndex: "studyCompletionDate",
    sorter: {
      compare: (a, b) => a.studyCompletionDate - b.studyCompletionDate,
      multiple: 4
    }
  },
  {
    title: "Protocol ID",
    dataIndex: "protocolID",
    sorter: {
      compare: (a, b) => a.protocolID - b.protocolID,
      multiple: 5
    }
  },
  {
    title: "Study Group",
    dataIndex: "studyGroup",
    sorter: {
      compare: (a, b) => a.studyGroup - b.studyGroup,
      multiple: 6
    }
  },
  {
    title: "Phase",
    dataIndex: "phase",
    sorter: {
      compare: (a, b) => a.phase - b.phase,
      multiple: 7
    }
  },
  {
    title: "Primary Indication",
    dataIndex: "primaryIndication",
    sorter: {
      compare: (a, b) => a.primaryIndication - b.primaryIndication,
      multiple: 8
    }
  },
  {
    title: "Secondary Indication",
    dataIndex: "secondaryIndication",
    sorter: {
      compare: (a, b) => a.secondaryIndication - b.secondaryIndication,
      multiple: 9
    }
  }
];

const data = [
  {
    studyName: "Study1",
    studyStartDate: "2020-02-24",
    studyCompletionDate: "2020-02-24",
    protocolID: "Protocol477588",
    studyGroup: "Group12233",
    phase: "Phase1",
    primaryIndication: "Inidication1",
    secondaryIndication: "Indication2"
  },
  {
    studyName: "Study2",
    studyStartDate: "2020-01-24",
    studyCompletionDate: "2020-01-24",
    protocolID: "Protocol47123",
    studyGroup: "Group12",
    phase: "Phase2",
    primaryIndication: "Inidication1",
    secondaryIndication: "Indication2"
  },
  {
    studyName: "Study3",
    studyStartDate: "2020-01-26",
    studyCompletionDate: "2020-01-26",
    protocolID: "Protocol47126",
    studyGroup: "Group16",
    phase: "Phase6",
    primaryIndication: "Inidication1",
    secondaryIndication: "Indication2"
  },
  {
    studyName: "Study4",
    studyStartDate: "2020-01-24",
    studyCompletionDate: "2020-01-24",
    protocolID: "Protocol4",
    studyGroup: "Group4",
    phase: "Phase4",
    primaryIndication: "Inidication1",
    secondaryIndication: "Indication2"
  },
  {
    studyName: "Study5",
    studyStartDate: "2020-01-25",
    studyCompletionDate: "2020-01-25",
    protocolID: "Protocol5",
    studyGroup: "Group5",
    phase: "Phase5",
    primaryIndication: "Inidication1",
    secondaryIndication: "Indication2"
  },
  {
    studyName: "Study6",
    studyStartDate: "2020-01-27",
    studyCompletionDate: "2020-01-27",
    protocolID: "Protocol46",
    studyGroup: "Group46",
    phase: "Phase46",
    primaryIndication: "Inidication1",
    secondaryIndication: "Indication2"
  }
];
function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function StudyTable(props) {
  const studies = useSelector(state => state.studyReducer.studies);
  console.log("studies", studies);

  const dispatch = useDispatch();
  // const [_studies, setStudies] = useState({
  //   count: 0,
  //   data: []
  // });
  getStudySaga();
  useEffect(() => {
    dispatch({ type: "SET_STUDIES" });
    // getStudySaga();
  });
  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}
