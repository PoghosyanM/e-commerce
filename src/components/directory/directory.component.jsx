import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "./directory.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...restSectionsData }) => (
        <MenuItem key={id} {...restSectionsData} />
      ))}
    </div>
  );
};
const mapStateToProps = () =>
  createStructuredSelector({
    sections: selectSections,
  });

export default connect(mapStateToProps)(Directory);
