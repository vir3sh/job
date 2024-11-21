import axios from "axios";
import classes from "../ManageUsers/ManageUserItem.module.css";
import Config from "../../../config/Config.json";

const JobItem = (props) => {
  const editButtonHandler = () => {
    axios
      .get(`${Config.SERVER_URL + "admin/jobs/" + props.jobInfo._id}`, {
        headers: {
          Authorization: "Bearer " + props.token,
        },
      })
      .then((res) => {
        // console.log(res.data);
        props.onEdit(res.data.job);
      })
      .catch((err) => console.log(err));
  };
  const deleteButtonHandler = () => {
    props.onDelete(props.jobInfo._id);
  };
  return (
    <tr className={classes.row}>
      <td>{props.jobInfo.title}</td>
      <td>{props.jobInfo.description}</td>
      <td>{props.jobInfo.startDate}</td>
      <td>{props.jobInfo.endDate}</td>
      <td className={classes.actions}>
        <button
          className={`${classes.edit} ${classes.button}`}
          onClick={editButtonHandler}
        >
       
          <span>Edit</span>
        </button>
        <button
          className={`${classes.delete} ${classes.button}`}
          onClick={deleteButtonHandler}
        >
        
          <span>Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default JobItem;
