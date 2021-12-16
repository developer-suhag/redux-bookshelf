import React from "react";
import { HiCheckCircle, HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToReadingList,
  removeFromReadingList,
} from "../../redux/actions/bookAction";
import styles from "./book.module.css";
const SingleBook = (props) => {
  const { _id, title, author, coverImageUrl, synopsis } = props.book;
  const dispatch = useDispatch();
  const readingList = useSelector((state) => state.books.readingList);
  return (
    <div className="card d-flex mb-3 p-3" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={coverImageUrl} alt="" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{author}</h6>
            <p className="card-text">{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons}>
        {readingList.find((book) => book._id === _id) ? (
          <>
            <HiMinusCircle
              onClick={() => dispatch(removeFromReadingList(_id))}
              title="Remove from list"
              className={styles.minus_icon}
            />
            <HiCheckCircle
              title="Mark as Finish"
              className={styles.check_icon}
            />
          </>
        ) : (
          <HiPlusCircle
            onClick={() => dispatch(addToReadingList(props.book))}
            title="Add to Reading"
            className={styles.plus_icon}
          />
        )}
      </div>
    </div>
  );
};

export default SingleBook;
