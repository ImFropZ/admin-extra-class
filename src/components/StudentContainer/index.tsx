import classes from "./studentContainer.module.css";
import { SpyglassIcon } from "../../assets/svg";

function StudentContainer() {
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.search}>
          <SpyglassIcon />
          <input type="text" placeholder="Search" />
        </div>
        <ul>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
          <li>Lim Tangmeng</li>
          <li>Yim Sotharoth</li>
        </ul>
      </div>
      <button className={classes.btn}>Create New Class</button>
    </div>
  );
}

export default StudentContainer;
