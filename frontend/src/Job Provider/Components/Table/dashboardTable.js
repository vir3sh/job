import React from "react";
import classes from "./Table.module.css";
import JobItem from "../../../components/dashboard/Tables/JobItem";
// import classes from "../ManageJobs/ManageTab.module.css";
import { useNavigate } from "react-router-dom";

import { Table, Row, Col, Button } from "react-bootstrap";

const Table1 = (props) => {
  const navigate = useNavigate();
  const recentJobsHandler = () => {
    navigate("/manage-jobs");
  };
  return (
    <React.Fragment>
      <Row className={classes.rowStyle}>
    
        <Col>
          <Button
            className={`${classes.button} float-end`}
            onClick={recentJobsHandler}
          >
            View All
          </Button>
        </Col>
      </Row>
      <div className={classes.tableBox}>
        <Table striped hover>
          <thead>
            <tr className={classes.tableHeader}>
              <th>Title</th>
              <th>Category</th>
              <th>First Created</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {props.jobData.map((job) => (
              <JobItem jobInfo={job} key={job._id} />
            ))}
          </tbody>
        </Table>
        {props.jobData.length === 0 && (
          <p className="text-center fw-bold">No jobs data!</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Table1;
