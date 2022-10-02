import classes from "./sectionHeader.module.css";
import { SpyglassIcon } from "../../assets/svg";

interface SectionHeader {
  title: string;
  btnName: string;
  onCreate(): any;
}

function SectionHeader(props: SectionHeader) {
  const { title, btnName, onCreate } = props;

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.search}>
        <SpyglassIcon />
        <input type="text" placeholder="Search" />
      </div>
      <button className={classes.btn} onClick={onCreate}>
        {btnName}
      </button>
    </div>
  );
}

export default SectionHeader;
