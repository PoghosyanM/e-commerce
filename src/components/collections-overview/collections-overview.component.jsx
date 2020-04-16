import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionsForPrwview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...restCollectionProps }) => (
        <CollectionPreview key={id} {...restCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = () =>
  createStructuredSelector({
    collections: selectCollectionsForPrwview,
  });

export default connect(mapStateToProps)(CollectionsOverview);
