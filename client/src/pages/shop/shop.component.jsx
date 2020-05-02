import React, { useEffect, Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import Spinner from "../../components/spinner/spinner.component";

const CollectionsOverview = lazy(() =>
  import("../../components/collections-overview/collections-overview.component")
);
const CollectionPage = lazy(() => import("../collection/collection.component"));

const ShopPage = ({
  match,
  fetchCollectionsStart,
  isCollectionFetching,
  isCollectionLoaded,
}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverview isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPage isLoading={!isCollectionLoaded} {...props} />
          )}
        />
      </Suspense>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionsFetching,
  isCollectionLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
