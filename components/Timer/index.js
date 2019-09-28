import { connect } from 'react-redux';
import Timer from './presenter';

//get state from Provider, Provider copy Timer's state
function mapStateToProps(state){
    const { isPlaying, elapsedTime, timerDuration } = state;
    return{
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

export default connect(mapStateToProps)(Timer);
