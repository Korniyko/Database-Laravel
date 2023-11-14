import { getLoopNews } from '../api/getLoopNews ';
import { getNewsWithParent } from '../api/getNewsWithParent ';

import { news } from '../api/news';
import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state:any) => {
    return {
      newsState:state.news,
      loopNewsState:state.loopNews,
      newsWithParentState:state.newsWithParent
    }
}


const mapDispatchToProps = (dispatch:any) => ({
  news : (value) => dispatch(news(value)),
  getLoopNews : () => dispatch(getLoopNews()),
  getNewsWithParent : (parentId: string) => dispatch(getNewsWithParent(parentId)),

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
