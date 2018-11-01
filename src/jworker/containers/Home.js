import React, {Component} from 'react';
import {connect} from "react-redux";
import {City} from 'jworker/components/cityComponent';
import * as CityAction from 'jworker/actions/cityActions';

class HomeContainer extends Component {
    componentWillMount() {
        console.log('componentWillMount')
        this.props.init();
    }
    render() {
        return Object.values(this.props.cityList).map(m =>
            (<City name={m.name}
                   weatherIcon={m.weatherIcon}
                   temp={m.temp}
                   pressure={m.pressure}
                   humidity={m.humidity}
                   min={m.min}
                   max={m.max}
                   loading={m.loading}
            />)
        )
    }
}

export default connect(
    (state, props) => ({
        placeholder: props.match.params.keyword,
        cityList: state.city
    }),
    dispatch => ({
        init() {
            dispatch(CityAction.loadAll());
        }
    })
)(HomeContainer);
