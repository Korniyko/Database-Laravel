import { getProducts } from '../api/getProducts';
import App from '../components/App';
import { connect } from 'react-redux';

const mapStateToProps = (state:any) => {
    return {}
}


const mapDispatchToProps = (dispatch:any) => ({
  getProducts : () => dispatch(getProducts()),

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
