import { connect } from 'react-redux';


import NewsItem from '../components/NewsItem';

const mapStateToProps = (state, ownProps) => ({
  needAnimate: this.animatedItem(state.newsList.scrollChangedItems , ownProps.news),
  animateIn: this.needAnimate ? this.needAnimate.isViewable : false,
  animatePosition: this.findAnimateIndex(state.newsList.scrollChangedItems , ownProps.news)
});

animatedItem = (changedList , item) => {
  return changedList ? changedList.find(t => t.item.Nid == item.Nid) : undefined ;
}

findAnimateIndex = (changedList , item) => {
  return changedList ? changedList.findIndex(t => t.item.Nid == item.Nid) : -1 ;
}

export default connect(mapStateToProps, null)(NewsItem);
