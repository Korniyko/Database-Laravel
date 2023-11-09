import { news } from '../api/news';
import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state:any) => {
    return {}
}


const mapDispatchToProps = (dispatch:any) => ({
  news : () => dispatch(news()),

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
