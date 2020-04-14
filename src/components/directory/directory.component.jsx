import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS from "./directory.data";

import "./directory.styles.scss";

const Directory = () => {
  const [sections] = useState(SECTIONS);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...restSectionsData }) => (
        <MenuItem key={id} {...restSectionsData} />
      ))}
    </div>
  );
};

export default Directory;
