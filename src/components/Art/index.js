import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Art from './Art';

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

const mapStateToProps = state => {
  console.log(state);
	return ({
    frame: state.pi.frame,
    start: state.pi.start,
    length: state.pi.length,
    data: state.pi.data,
    pixelSize: state.pi.pixelSize
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Art);
